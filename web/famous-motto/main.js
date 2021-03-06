$(function () {
    var data = [
        [
            `
            Docker is an open platform for developing, shipping, and running applications. 
            Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker,
            you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, 
            and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.
            `,
            'What is Docker?'

        ],
        [
            `
            Vagrant creates Virtual Machines in minutes while Docker creates Virtual Containers in seconds.
            Instead of providing a full Virtual Machines, like you get with Vagrant, Docker provides you lightweight Virtual Containers, that share the same kernel and allow to safely execute independent processes.
            In addition to the speed, Docker gives tons of features that cannot be achieved with Vagrant.
            Most importantly Docker can run on Development and on Production (same environment everywhere). While Vagrant is designed for Development only, (so you have to re-provision your server on Production every time).
            `,'Why Docker not Vagrant!?'
        ],
        [
            `
            如果ax=N（a>0，且a≠1），那么数x叫做以a为底N的对数，记作x=logaN，读作以a为底N的对数，其中a叫做对数的底数，N叫做真数。
            `
        ],
        [
            "We find ourselves in a rare moment where the citizens of our country and all countries are watching and waiting for us to lead. It's a responsibility that this generation did not ask for, but one that we must accept for the future and our children and our grandchildren. And the strongest democracies flourish from frequent and lively debate, but they endure when people of every background and belief find a way to set aside smaller differences in service of a greater purpose."
        ],
        [
            `I'm sorry but I don't want to be an Emperor - that's not my business - I don't want to rule or conquer anyone. I should like to help everyone if possible, Jew, gentile, black man, white. We all want to help one another, human beings are like that.
            We want to live by each other's happiness, not by each other's misery. We don't want to hate and despise one another. In this world there is room for everyone and the good earth is rich and can provide for everyone.
            The way of life can be free and beautiful.
            But we have lost the way.
            Greed has poisoned men's souls - has barricaded the world with hate; has goose-stepped us into misery and bloodshed.
            We have developed speed but we have shut ourselves in: machinery that gives abundance has left us in want. Our knowledge has made us cynical, our cleverness hard and unkind. We think too much and feel too little: More than machinery we need humanity; More than cleverness we need kindness and gentleness. Without these qualities, life will be violent and all will be lost.
            The aeroplane and the radio have brought us closer together. The very nature of these inventions cries out for the goodness
            in men, cries out for universal brotherhood for the unity of us all. Even now my voice is reaching millions throughout the world, millions of despairing men, women and little children, victims of a system that makes men torture and imprison innocent people. To those who can hear me I say Do not despair. The misery that is now upon us is but the passing of greed, the bitterness of men who fear the way of human progress: the hate of men will pass and dictators die, and the power they took from the people, will return to the people and so long as men die, liberty will never perish...
            Soldiers - don't give yourselves to brutes, men who despise you, enslave you - who regiment your lives, tell you what to
            do, what to think and what to feel, who drill you, diet you, treat you like cattle, use you as cannon fodder!
            Don't give yourselves to these unnatural men, machine men, with machine minds and machine hearts! You are not machines! You are not cattle! You are men! You have the love of humanity in your hearts. You don't hate - only the unloved hate - the unloved and the unnatural. Soldiers - don't fight for slavery, fight for liberty!
            In the seventeenth chapter of Saint Luke it is written the kingdom of God is within man - not one man, nor a group of men - but in all men - in you! You the people have the power, the power to create machines, the power to create happiness! You the people have the power to make this life free and beautiful, to make this life a wonderful adventure! Then in the name of democracy let us use that power - let us all unite!!! Let us fight for a new world, a decent world that will give men a
            chance to work, that will give you the future and old age and security. By the promise of these things, brutes have risen to
            power, but they lie! They do not fulfil their promise, they never will! Dictators free themselves but they enslave the people! Now let us fight to fulfil that promise! Let us fight to free the world, to do away with national barriers, to do away with greed, with hate and intolerance! Let us fight for a world of reason, a world where science and progress will lead to all men's happiness.
            Soldiers - in the name of democracy, let us all unite!!!"`
        ],

    ]
    var html = "";
    var length = data.length;
    for (var i = 0; i < length; i++) {
        html += '<blockquote>' +
            '<p>' + data[i][0] + '</p>' +
            '<footer>' + data[i][1] + '</footer>' +
            '</blockquote>';
    }
    $(".content").append(html);
});