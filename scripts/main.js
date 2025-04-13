// Log when the script loads
print("Loading PVP Mod script...");

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
    Call.infoMessage(player.con, "[gold]Welcome to PVP Mod![]");
}); 