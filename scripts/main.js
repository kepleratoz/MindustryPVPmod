// Log when the script loads
print("Loading Dark Atmosphere Mod script...");

// Initialize tech tree
Events.on(ContentInitEvent, () => {
    // Get our mod
    const mod = Vars.mods.locateMod("dark-atmosphere");
    if (!mod) {
        print("Error: Could not locate dark-atmosphere mod");
        return;
    }

    // Get our planet
    const shadow = Vars.content.planet("shadow");
    if (!shadow) {
        print("Error: Could not find shadow planet");
        return;
    }

    // Create our tech tree
    shadow.techTree = () => {
        // Start with our core
        const coreVoyage = Vars.content.block("core-voyage");
        TechTree.nodeRoot(coreVoyage, () => {
            // Add Para Reconstructor
            const paraReconstructor = Vars.content.block("para-reconstructor");
            TechTree.node(coreVoyage, paraReconstructor);

            // Add units
            const breach = Vars.content.unit("breach");
            const striker = Vars.content.unit("striker");
            const warrior = Vars.content.unit("warrior");
            
            TechTree.node(paraReconstructor, breach);
            TechTree.node(paraReconstructor, striker);
            TechTree.node(paraReconstructor, warrior);
        });
    };
});

// Create UI when the game starts
Events.on("stateChange", state => {
    print("Game state changed: " + state);
    print("Game rules: " + Object.keys(Vars.state.rules));
    print("Is PVP? " + Vars.state.rules.pvp);
    
    try {
        // Create a table for our button
        const table = new Table();
        table.top().left().margin(12);
        
        // Add the button
        table.button("Capture Points", () => {
            showStatus();
        }).size(130, 45);
        
        // Add to the HUD
        if(Vars.ui && Vars.ui.hudGroup) {
            print("Adding table to HUD group");
            Vars.ui.hudGroup.addChild(table);
            print("Table added successfully");
        } else {
            print("Error: UI or hudGroup is null");
            print("UI exists: " + (Vars.ui !== null));
            print("HudGroup exists: " + (Vars.ui ? Vars.ui.hudGroup !== null : false));
        }
        
        print("UI elements creation attempt completed");
    } catch(err) {
        print("Error creating UI: " + err);
        print("Error stack: " + err.stack);
    }
});

// Function to show status dialog
function showStatus() {
    print("Opening status dialog...");
    const dialog = new BaseDialog("Capture Points Status");
    dialog.cont.pane(p => {
        p.defaults().pad(5);
        p.add("[accent]Team Scores[]").row();
        p.add("[red]Red Team: 0[]").left().row();
        p.add("[blue]Blue Team: 0[]").left().row();
    }).size(200, 200);
    
    dialog.addCloseButton();
    dialog.show();
}

// Log when players join
Events.on("playerJoin", player => {
    print("Player joined: " + player.name);
    Call.infoMessage(player.con, "[gold]Welcome to Dark Atmosphere![]");
}); 
