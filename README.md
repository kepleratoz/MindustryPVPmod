# Mindustry PVP Mod

A PVP-focused mod for Mindustry that adds new turrets, resources, and mechanics to enhance player-versus-player gameplay.

## Features

- Custom PVP-focused turrets
- New resources for PVP mechanics
- Balanced for competitive play

## Installation

1. Download the latest release from the releases page
2. Place the downloaded `.jar` file in your Mindustry's `mods` folder:
   - Windows: `%AppData%/Mindustry/mods/`
   - Linux: `~/.local/share/Mindustry/mods/`
   - Mac: `~/Library/Application Support/Mindustry/mods/`
3. Launch Mindustry and enable the mod in the mods menu

## Development

To modify this mod:

1. Clone this repository
2. Edit the content files in the respective directories:
   - `content/blocks/` - For new blocks and turrets
   - `content/items/` - For new items and resources
   - `sprites/` - For custom sprites (add your own .png files)
3. Test your changes by importing the mod folder in Mindustry

## Mod Structure

```
├── mod.hjson           # Mod metadata
├── content/            # Game content
│   ├── blocks/        # Block definitions
│   │   └── turrets/   # Turret definitions
│   └── items/         # Item definitions
└── sprites/           # Custom sprites (add your .png files here)
```

## Contributing

Feel free to contribute by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 