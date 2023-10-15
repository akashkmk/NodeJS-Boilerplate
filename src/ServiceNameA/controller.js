export const HelloMessage = async (req, res) =>
  res.status(200).json({
    message: 'Hello controller A',
  });

export const WorldMessage = async (req, res) =>
  res.status(200).json({
    message: 'World Controller A',
  });
