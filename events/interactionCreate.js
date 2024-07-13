module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
      if (!interaction.isCommand()) return;
  
      const command = client.commands.get(interaction.commandName);
  
      if (!command) return;
  
      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Komutu çalıştırırken bir hata oluştu!', ephemeral: true });
      }
    },
  };
  