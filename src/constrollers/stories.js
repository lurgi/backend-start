export const home = (req, res) => res.send("HOME");
export const trending = (req, res) => res.send("TRENDING");
export const newStories = (req, res) => res.send("NEW STORIES");
export const editStory = (req, res) => res.send(`EDIT STORY ${req.params.id}`);
export const watchStory = (req, res) =>
  res.send(`WATCH STORY ${req.params.id}`);
export const deleteStory = (req, res) =>
  res.send(`DELETE STORY ${req.params.id}`);
