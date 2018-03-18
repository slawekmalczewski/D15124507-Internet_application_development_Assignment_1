module ApplicationHelper

  def error(objekt)
  	render(:partial=>'errorhandling/errors', :locals=>{:objekt=>objekt})
  end

end
