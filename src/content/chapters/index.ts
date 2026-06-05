import type { Chapter, NoteSection } from "./types";

const templateSection = (chapterTitle: string, focus: string): NoteSection => ({
  id: "curation-queue",
  eyebrow: "Template",
  title: `${chapterTitle} notes are queued`,
  coreIdea:
    "This chapter has a reading shell ready, but the curated notes have not been written yet.",
  theory: [
    `Use this space to compress ${focus} into practical, reviewable notes after the reading session.`,
    "Keep the final notes original: summarize ideas, preserve examples as learning anchors, and avoid copying long passages from the source book.",
  ],
  examples: ["Add the book's strongest examples once this chapter is studied."],
  useCases: ["Use this template to keep every chapter consistent as the site grows."],
  traps: [
    "Do not turn the page into a transcript.",
    "Do not skip situations where a technique should or should not be used.",
  ],
  retention: {
    remember: "Every chapter should end with decisions, examples, and recall hooks.",
    showsUp: "Future study sessions, interview revision, and project planning.",
    oneLiner: "Template first, curated notes after the reading session.",
  },
});

const chapterOne: Chapter = {
  number: 1,
  slug: "the-machine-learning-landscape",
  title: "The Machine Learning Landscape",
  pages: "1-33",
  status: "curated",
  accent: "#7dd3fc",
  iconName: "Radar",
  summary:
    "A practical map of what machine learning is, why it beats hand-written rules in changing systems, how learning systems differ, and what usually makes ML projects fail.",
  sections: [
    {
      id: "what-is-ml",
      eyebrow: "Definition",
      title: "What machine learning is",
      coreIdea:
        "Machine learning is the practice of letting systems improve at a task from data instead of coding every rule by hand.",
      theory: [
        "A normal program follows rules written by a developer. An ML system receives examples, discovers useful patterns, and uses those patterns to make predictions or decisions.",
        "The key shift is from hand-authoring logic to designing the learning setup: data, objective, model family, training process, and evaluation.",
        "The output is not just a number or label. The output is a trained model that has internalized a pattern from historical evidence.",
        "In the book's language, the examples the system learns from are training instances. A performance measure tells us whether the system is improving at the task.",
        "The model is only useful if it generalizes: it must perform well on new cases, not only on the examples it saw during training.",
        "This is why ML work is never only model selection. It is also defining the task, collecting training data, choosing a performance measure, training, validating, and monitoring.",
      ],
      examples: [
        "Spam filtering: instead of listing every spam phrase forever, the system learns signals from spam and non-spam emails.",
        "A housing-price predictor: examples of districts and prices become the evidence used to estimate future prices.",
        "A product recommender learns from clicks, purchases, skips, watch time, and returns. The program does not need a hand-written rule for every taste.",
        "A medical triage model may learn from symptoms, lab values, and outcomes. The output is not a diagnosis by magic; it is a learned estimate that must be evaluated carefully.",
      ],
      useCases: [
        "Problems where rules are hard to write but examples are available.",
        "Systems where behavior changes over time and manual rules would keep going stale.",
        "Tasks where the cost of being slightly wrong is acceptable or can be controlled by human review, confidence thresholds, or fallback rules.",
        "Products where each new training instance can improve the next version of the system.",
      ],
      traps: [
        "Thinking ML removes the need for design. You still design the objective, data pipeline, metrics, and feedback loop.",
        "Thinking the model understands the world. It learns statistical patterns from the data it sees.",
        "Treating the training set as the real world. It is only a sample, and the sample can be biased, stale, noisy, or incomplete.",
        "Measuring the wrong target. If the performance measure rewards the wrong thing, the model can improve the metric while hurting the product.",
      ],
      caseStudies: [
        {
          title: "Spam filters show why learned patterns beat fixed rules",
          context:
            "A hand-written spam filter starts with rules like suspicious phrases, sender patterns, or excessive links. It works until attackers change wording, formatting, timing, and domains. A trained model can absorb new labeled messages and shift its decision boundary as the pattern changes.",
          whyItMatters:
            "This is the book's central motivation: when the environment changes, examples can be a better maintenance surface than manual rules.",
          pitfall:
            "A model trained on old spam will still fail if the training instances do not include the new attack style.",
          takeaway:
            "The practical asset is the full loop: collect examples, label them, train, evaluate, deploy, and repeat.",
          visual: "ruleDecay",
        },
      ],
      retention: {
        remember:
          "ML replaces brittle rule lists with learned patterns, but the learning setup is still engineered: task, data, model, performance measure, and validation.",
        showsUp:
          "Classification, regression, recommendation, ranking, search, forecasting, and anomaly detection.",
        oneLiner:
          "Machine learning is programming by training instances, feedback, and evaluation instead of only hand-written rules.",
      },
    },
    {
      id: "why-use-ml",
      eyebrow: "Motivation",
      title: "Why use machine learning",
      coreIdea:
        "ML becomes valuable when explicit rules are too complex, too fragile, or too expensive to maintain.",
      theory: [
        "Rule-based systems can work for small stable problems, but they degrade when the environment changes or when the pattern has too many exceptions.",
        "An ML workflow lets the system adapt by retraining on new examples. The maintainable asset becomes the data and training process, not a growing pile of special cases.",
        "ML can also reveal patterns humans did not know to look for, making it useful for exploration and insight, not only automation.",
        "The book's point is not that rules are bad. The point is that some problems are too complex for rules because the best decision depends on many weak signals interacting.",
        "Traditional software is still essential around the model: data validation, feature extraction, deployment, monitoring, rollback, and user experience.",
        "A strong ML system often mixes both worlds: deterministic guardrails for safety and a learned model for the fuzzy pattern.",
      ],
      examples: [
        "Spam evolves constantly. A model can be retrained with new spam examples faster than engineers can maintain every keyword rule.",
        "Customer behavior, fraud, medical signals, and demand forecasting often contain interactions that are difficult to encode manually.",
        "A search engine cannot manually rank every page for every query. It learns relevance from links, text, user behavior, freshness, and many other signals.",
        "A speech recognizer cannot list every accent, microphone, room, and pronunciation rule. It needs examples that cover variation.",
      ],
      useCases: [
        "High-volume decisions where small prediction improvements matter.",
        "Discovery problems where the goal is to find useful structure in data.",
        "Personalization, where each user or context may need different behavior.",
        "Changing domains where yesterday's rules become incomplete: fraud, spam, ads, recommendations, ranking, and abuse detection.",
        "Complex perception tasks like images, audio, and text where the rule list would be enormous and brittle.",
      ],
      traps: [
        "Using ML for a deterministic problem where normal code is simpler and safer.",
        "Treating retraining as magic while ignoring bad data collection.",
        "Skipping the baseline. A simple rule-based or statistical baseline tells you whether the ML system is actually earning its complexity.",
        "Ignoring operational cost. If the model must be retrained, monitored, explained, and rolled back, that work belongs in the decision.",
      ],
      caseStudies: [
        {
          title: "Credit-card fraud detection is a moving target",
          context:
            "Fraud teams can write obvious rules: block impossible travel, flag unusual purchase sizes, or detect repeated failed attempts. But attackers adapt. A learned classifier can combine many weak signals, retrain on confirmed fraud, and surface suspicious transactions for review.",
          whyItMatters:
            "The useful behavior is not a single perfect rule; it is a model that keeps learning from fresh labeled outcomes.",
          pitfall:
            "If the labels are delayed or biased toward only the fraud already caught by old rules, the model inherits blind spots.",
          takeaway:
            "Use ML when adaptation and weak-signal combination matter, but keep rules and human review around high-risk decisions.",
        },
      ],
      retention: {
        remember: "Use ML when examples are cheaper and more robust than hand-crafted rules.",
        showsUp:
          "Spam filters, fraud detection, recommendations, search ranking, diagnostics, forecasting.",
        oneLiner:
          "ML is worth it when the pattern is real, data exists, and manual rules cannot keep up.",
      },
    },
    {
      id: "application-examples",
      eyebrow: "Applications",
      title: "Where ML shows up",
      coreIdea:
        "Most ML applications are variations of prediction, classification, detection, generation, ranking, or control.",
      theory: [
        "A useful way to identify ML opportunities is to ask what decision is being made and what historical evidence could improve that decision.",
        "The visible product may feel intelligent, but underneath it is usually a narrower task: estimate a value, choose a label, rank options, detect something unusual, or select an action.",
        "The same product can contain many ML tasks. A video platform may classify content, rank recommendations, detect abuse, predict churn, and personalize notifications.",
        "The book's examples are broad because ML is not one algorithm. It is a toolbox for turning data into useful behavior across perception, prediction, control, and discovery.",
        "For retention, translate every application into input data, target output, training signal, performance measure, and deployment decision.",
      ],
      examples: [
        "Image classifiers identify objects in pictures.",
        "Natural language systems summarize, translate, classify sentiment, or retrieve relevant content.",
        "Recommendation systems predict what a user may want next.",
        "Robotic or game-playing agents learn which actions lead to better outcomes.",
        "Forecasting systems estimate future demand, traffic, inventory needs, energy load, or revenue.",
        "Anomaly detection systems flag rare events such as equipment failure, account takeover, abnormal transactions, or data pipeline breaks.",
      ],
      useCases: [
        "When a task can be converted into inputs, outputs, and feedback.",
        "When product behavior can improve from observed outcomes.",
        "When the decision is repeated often enough that training and maintenance cost are justified.",
        "When predictions can be evaluated against future ground truth, human judgment, or business outcomes.",
      ],
      traps: [
        "Starting from a model instead of the decision it must improve.",
        "Ignoring whether the prediction will actually be used by a person or system.",
        "Confusing an impressive demo with a deployable workflow. The deployed system still needs latency, monitoring, fallback behavior, and error handling.",
        "Optimizing a prediction that does not change the downstream decision. If no action changes, the model is decorative.",
      ],
      caseStudies: [
        {
          title: "Recommendations are not just prediction; they are product control",
          context:
            "A recommender predicts what a user may click, watch, buy, or save. But the product must decide what to show, how much novelty to inject, when to diversify, and how to avoid feedback loops where the system only learns from what it already chose to show.",
          whyItMatters:
            "The ML task is embedded in a larger decision system, so the target and performance measure shape user behavior.",
          pitfall:
            "If the model only optimizes short-term clicks, it may learn sensational or repetitive content while reducing long-term satisfaction.",
          takeaway:
            "Always ask what action the prediction controls and whether the performance measure matches the product goal.",
        },
      ],
      retention: {
        remember:
          "Translate the product idea into the exact prediction, ranking, detection, or action problem.",
        showsUp: "Every ML project framing discussion.",
        oneLiner:
          "A good ML use case starts with a decision and evidence, not with a fashionable model.",
      },
    },
    {
      id: "learning-types",
      eyebrow: "Taxonomy",
      title: "Supervised, unsupervised, semisupervised, and reinforcement learning",
      coreIdea: "Learning systems differ mainly by the kind of feedback they receive.",
      theory: [
        "Supervised learning uses labeled examples. The model sees inputs and the correct outputs during training.",
        "Unsupervised learning searches for structure without target labels, such as clusters, lower-dimensional representations, or anomalies.",
        "Semisupervised learning combines a small amount of labeled data with a larger pool of unlabeled data.",
        "Reinforcement learning trains an agent through rewards and penalties while it acts in an environment.",
        "Supervised tasks split into classification and regression. Classification predicts a category; regression predicts a numeric value.",
        "Unsupervised learning is often used before supervised learning: it can reveal clusters, compress features, detect outliers, or make data easier to visualize.",
        "Reinforcement learning is different because the training signal is not a correct label for each input. The agent must learn a policy through consequences over time.",
      ],
      examples: [
        "Supervised: classify emails as spam or predict house prices.",
        "Unsupervised: segment customers into groups or visualize high-dimensional data.",
        "Semisupervised: label a few photos, then use many unlabeled photos to improve the model.",
        "Reinforcement: train a game agent or robot policy through trial and reward.",
        "Classification: predict whether a transaction is fraudulent.",
        "Regression: predict a district's median housing price.",
        "Clustering: discover groups of users with similar behavior before any labels exist.",
      ],
      useCases: [
        "Use supervised learning when reliable labels exist.",
        "Use unsupervised learning when discovery, compression, clustering, or anomaly detection is the goal.",
        "Use reinforcement learning when actions change future states and rewards are delayed.",
        "Use semisupervised learning when labeling is expensive but unlabeled examples are abundant.",
        "Use anomaly detection when the important cases are rare and normal behavior is easier to learn than every failure mode.",
      ],
      traps: [
        "Forcing supervised learning when labels are weak, biased, or unavailable.",
        "Expecting unsupervised clusters to automatically match real business categories.",
        "Using reinforcement learning for a problem that is really a static prediction task.",
        "Calling every prediction problem AI strategy. First identify the supervision signal: label, no label, partial label, or reward.",
        "Forgetting that labels can encode human mistakes, policy bias, or historical unfairness.",
      ],
      caseStudies: [
        {
          title: "Customer segmentation starts unsupervised, then becomes supervised",
          context:
            "A company may begin with clustering because it does not yet know its user categories. Clusters reveal patterns like bargain hunters, power users, seasonal users, and dormant users. Later, once teams define useful segments, supervised models can predict segment membership for new users.",
          whyItMatters:
            "Learning type can change as the product matures and as labels become available.",
          pitfall:
            "Clusters are mathematical groupings, not automatically meaningful customer personas.",
          takeaway:
            "Use unsupervised learning to discover structure, then validate whether the discovered structure supports a real decision.",
          visual: "learningTypes",
        },
      ],
      retention: {
        remember:
          "The feedback source determines the learning style: labels, structure, partial labels, or rewards.",
        showsUp: "Problem framing before choosing algorithms.",
        oneLiner: "Ask what feedback the learner gets; that tells you the ML family.",
      },
    },
    {
      id: "batch-online",
      eyebrow: "Training rhythm",
      title: "Batch and online learning",
      coreIdea:
        "Batch systems learn in scheduled training runs, while online systems update incrementally as new data arrives.",
      theory: [
        "Batch learning trains on a full dataset, then deploys a model. Updating it usually means retraining and redeploying.",
        "Online learning updates from mini-streams of data, which helps when data arrives continuously or the dataset is too large to train on all at once.",
        "The learning rate matters in online learning: too slow and the system adapts poorly, too fast and it can chase noise or malicious data.",
        "Batch learning is often simpler to reason about because you can freeze a training set, run experiments, compare validation scores, and ship a versioned model.",
        "Online learning is powerful when fresh data matters, but it turns data quality into a live production risk. Bad feedback can damage the model quickly.",
        "The book also highlights out-of-core learning: when the dataset is too large to fit in memory, the system can train incrementally on small chunks.",
      ],
      examples: [
        "Batch: retrain a pricing model nightly using all recent transactions.",
        "Online: update a news recommendation model as users click and skip stories.",
        "Batch: train a monthly credit-risk model after labels settle and compliance review is complete.",
        "Online: adapt a traffic prediction system as road conditions, events, and weather change through the day.",
        "Out-of-core: train on massive logs by streaming mini-batches from disk instead of loading everything at once.",
      ],
      useCases: [
        "Batch fits stable domains and simpler operations.",
        "Online fits streams, rapid drift, personalization, and huge datasets.",
        "Choose batch when reproducibility, auditability, and controlled releases matter more than immediate adaptation.",
        "Choose online when delayed retraining would make the model stale before the next release.",
      ],
      traps: [
        "Letting an online model learn from corrupted feedback without monitoring.",
        "Using batch retraining when the environment changes faster than the retraining cycle.",
        "Treating clicks as truth. User feedback is often noisy because people click by accident, get manipulated by ranking, or behave differently under UI changes.",
        "Forgetting rollback. A live-learning system needs a way to stop learning, revert, and inspect what changed.",
      ],
      caseStudies: [
        {
          title: "News ranking has data drift built into the product",
          context:
            "A news model trained yesterday may miss today's breaking events. Online learning can react to fresh clicks and reads, but it can also overreact to noisy bursts, coordinated behavior, or a temporary headline trend.",
          whyItMatters:
            "The learning rate becomes a product control: it decides how fast the model forgets old patterns and trusts new ones.",
          pitfall:
            "A system that adapts too aggressively can amplify noise, manipulation, or short-lived spikes.",
          takeaway:
            "Online learning is useful when freshness matters, but monitoring and conservative updates are part of the model design.",
        },
      ],
      retention: {
        remember: "Batch is simpler; online is more adaptive but needs stronger monitoring.",
        showsUp: "Production ML architecture and model maintenance.",
        oneLiner: "Batch learns in releases; online learns while the world is moving.",
      },
    },
    {
      id: "instance-model",
      eyebrow: "Generalization",
      title: "Instance-based versus model-based learning",
      coreIdea:
        "Instance-based systems compare new cases to memorized examples, while model-based systems learn parameters that generalize from the examples.",
      theory: [
        "Instance-based learning stores examples and predicts by similarity. The design question becomes how to measure similarity well.",
        "Model-based learning fits a model to the training data and uses that model to make predictions on new cases.",
        "Both approaches are forms of generalization. One generalizes by analogy to stored instances; the other generalizes through a learned abstraction.",
        "Instance-based systems can feel simple because training is mostly memorization, but inference can be expensive because each new prediction may compare against many stored instances.",
        "Model-based systems spend more effort during training, then inference can be compact: apply the learned parameters to the new case.",
        "A model-based workflow usually means selecting a model family, defining a cost function, fitting parameters, checking performance, and then using the model for new inputs.",
      ],
      examples: [
        "Instance-based: classify a new item by looking at its nearest labeled neighbors.",
        "Model-based: fit a linear model that estimates a country's life satisfaction from economic indicators.",
        "Instance-based: recommend products similar to products a user already liked.",
        "Model-based: learn weights for features such as GDP per capita, rooms per household, or median income.",
        "Similarity-based search: find images, documents, or users that are close in an embedding space.",
      ],
      useCases: [
        "Instance-based methods are useful when similarity is meaningful and the dataset is manageable.",
        "Model-based methods are useful when you want compact prediction logic, interpretability, or faster inference.",
        "Use instance-based thinking for retrieval, nearest-neighbor search, duplicate detection, and example-based recommendations.",
        "Use model-based thinking when the pattern should be summarized into parameters, curves, rules, or decision boundaries.",
      ],
      traps: [
        "Using a weak similarity measure and assuming nearest examples are actually relevant.",
        "Trusting a simple model beyond the range of data it was trained on.",
        "Letting irrelevant features dominate distance. In nearest-neighbor methods, scale and feature choice can completely change what counts as similar.",
        "Confusing a fitted curve with causation. A model can predict from correlations without proving why the relationship exists.",
      ],
      caseStudies: [
        {
          title: "The life-satisfaction example is a model-based thinking drill",
          context:
            "The book uses a small country-level example to show the model-based workflow: collect data, choose a model, train it, and use it to predict. The point is not that one feature explains life satisfaction perfectly; the point is to see how a model learns parameters from training instances.",
          whyItMatters:
            "It teaches the core ML loop before complex algorithms appear.",
          pitfall:
            "A simple line can look persuasive even when the dataset is tiny, the relationship is incomplete, or omitted variables matter.",
          takeaway:
            "Use simple models to learn the workflow, but evaluate generalization and assumptions before trusting conclusions.",
        },
      ],
      retention: {
        remember: "Generalization can come from stored neighbors or learned parameters.",
        showsUp: "k-nearest neighbors, linear regression, classifiers, recommendation baselines.",
        oneLiner:
          "Instance-based asks what this looks like; model-based asks what rule best explains the examples.",
      },
    },
    {
      id: "data-challenges",
      eyebrow: "Failure modes",
      title: "Data quantity, representativeness, quality, and features",
      coreIdea:
        "Most ML failure starts before the model: not enough data, wrong data, dirty data, or weak features.",
      theory: [
        "Models need enough examples to learn patterns that survive beyond the training set.",
        "Training data must represent the cases the model will see in production. A clean model trained on a biased sample still learns the biased sample.",
        "Poor-quality data introduces missing values, outliers, noise, and measurement problems that the model may treat as signal.",
        "Feature engineering matters because irrelevant or weak representations make the real pattern harder to learn.",
        "Insufficient quantity of training data makes the model sensitive to noise. With too few training instances, the model may learn accidents instead of stable relationships.",
        "Nonrepresentative training data creates sampling bias. The model may appear strong in validation but fail on populations or situations that were under-sampled.",
        "Poor-quality data is not only missing values. It includes wrong labels, duplicate rows, inconsistent units, stale records, outliers, and data collected under a different policy.",
        "Irrelevant features make learning harder because the model must separate useful signal from noise. Good feature selection and feature extraction improve the signal-to-noise ratio.",
      ],
      examples: [
        "A housing model trained only on one region may fail in another region because prices depend on local patterns.",
        "A classifier trained on mislabeled examples can learn the labeling mistakes.",
        "A face-recognition system trained mostly on one demographic can perform worse on underrepresented groups.",
        "A demand forecast trained before a major market change can misread post-change behavior because the old data distribution no longer matches reality.",
        "A model using future information by accident, such as a post-outcome field, may score well offline but fail when deployed.",
      ],
      useCases: [
        "Before training, audit how the data was collected and what production population it represents.",
        "Invest in cleaning, labeling, feature selection, and feature construction before chasing model complexity.",
        "Split data in a way that reflects future use. Time-series, geography, user identity, and leakage risks often require careful splitting.",
        "Create a data checklist before modeling: source, labels, missingness, outliers, representativeness, leakage, and drift risk.",
      ],
      traps: [
        "Assuming more model capacity compensates for unrepresentative data.",
        "Cleaning away rare cases that are actually important.",
        "Using features that leak the answer and make validation look unrealistically good.",
        "Balancing a dataset without asking whether production is balanced. The training distribution and evaluation distribution must be chosen deliberately.",
        "Ignoring label quality. A model cannot consistently outperform the quality of the target signal it is trained to imitate.",
      ],
      caseStudies: [
        {
          title: "Sampling bias can create a model that works only for the people it saw",
          context:
            "Imagine a diagnostic model trained mostly on hospital data from urban clinics. It may perform well in validation if validation comes from the same hospitals, then fail in rural clinics where equipment, demographics, disease prevalence, or reporting habits differ.",
          whyItMatters:
            "Representativeness is about matching the future cases the model will actually face, not only collecting many rows.",
          pitfall:
            "A random split can hide the issue because train and validation both share the same biased source.",
          takeaway:
            "Ask whether the validation set represents deployment, and test important subgroups separately.",
          visual: "dataRepresentativeness",
        },
      ],
      retention: {
        remember: "The model cannot learn the real world if the dataset is a distorted version of it.",
        showsUp: "Every dataset review, notebook EDA, and production debugging session.",
        oneLiner: "Bad data makes good algorithms look bad and bad systems look good.",
      },
    },
    {
      id: "fit-and-validation",
      eyebrow: "Evaluation",
      title: "Overfitting, underfitting, validation, and model selection",
      coreIdea:
        "A model is useful only if it generalizes; validation is how you detect whether it learned the pattern or just the training set.",
      theory: [
        "Overfitting happens when a model performs well on training data but poorly on new data because it captured noise or quirks.",
        "Underfitting happens when the model is too simple, the features are too weak, or training is insufficient, so it misses real structure.",
        "Holdout validation and test sets estimate generalization. Hyperparameters are tuned on validation data, while the test set should stay reserved for the final estimate.",
        "Data mismatch occurs when validation or test data does not reflect the real deployment data, leading to misleading confidence.",
        "Generalization error is the error on new cases. Since we cannot know it directly before deployment, we estimate it with validation and test sets.",
        "Hyperparameters are settings not learned directly from the training data, such as model complexity, regularization strength, or learning rate.",
        "The book's discipline is important: train on the training set, compare choices on validation, and touch the test set as late and rarely as possible.",
        "Overfitting can be reduced by simplifying the model, gathering more representative training data, reducing noisy features, or regularizing the model.",
        "Underfitting can be improved by using a more powerful model, better features, less regularization, or more useful training signal.",
      ],
      examples: [
        "A complex model that memorizes training examples may score perfectly in training and fail on fresh cases.",
        "A straight-line model may underfit a curved relationship even with clean data.",
        "A decision tree with no regularization can keep splitting until it memorizes small quirks in the training set.",
        "A linear model may underfit image recognition because raw pixels need richer representations than a simple linear boundary.",
        "A model selected after dozens of test-set checks may look good because the team has indirectly overfit the test set.",
      ],
      useCases: [
        "Use validation to choose model families and hyperparameters.",
        "Use a final test set once, after model selection, to estimate real-world performance.",
        "Compare validation and production-like data when the source distribution changes.",
        "Use cross-validation when the dataset is small and a single validation split would be too noisy.",
        "Use separate validation and test distributions when data mismatch is suspected, such as old data for training and recent data for deployment.",
      ],
      traps: [
        "Tuning repeatedly on the test set until it becomes another training signal.",
        "Celebrating high validation scores when the validation data differs from production.",
        "Fixing overfitting only with more data when simpler models or regularization may also be needed.",
        "Choosing the model that wins by a tiny margin on a noisy validation set without checking stability.",
        "Ignoring the error cases. Aggregate metrics can hide systematic failures on important slices.",
      ],
      caseStudies: [
        {
          title: "Leaderboard overfitting is test-set leakage in slow motion",
          context:
            "In competitions and internal model selection, teams may keep submitting, checking the public score, adjusting, and submitting again. Even without directly training on the test labels, repeated feedback can make the model fit quirks of that benchmark.",
          whyItMatters:
            "The test set stops being an honest estimate once it guides too many decisions.",
          pitfall:
            "A model can win the visible validation loop and still disappoint on fresh production data.",
          takeaway:
            "Protect a final holdout set, inspect errors, and prefer stable improvements over tiny leaderboard gains.",
          visual: "fitGeneralization",
        },
      ],
      retention: {
        remember: "Training score tells you fit; validation and test scores tell you generalization.",
        showsUp: "Model selection, leaderboard discipline, production monitoring, and interviews.",
        oneLiner:
          "The real question is not whether the model learned the training data; it is whether it learned the task.",
      },
    },
  ],
  reviewSnippets: [
    "Training instances are the examples the system learns from; the training set is the collection of those examples.",
    "A performance measure defines what good means. Bad metric, bad learning direction.",
    "Generalization is the real goal: good performance on new cases, not memorization of the training data.",
    "Supervised learning has labels; unsupervised learning looks for structure; semisupervised learning mixes both; reinforcement learning uses rewards.",
    "Classification predicts categories. Regression predicts numeric values.",
    "Batch learning trains offline and deploys a fixed model. Online learning updates incrementally as fresh data arrives.",
    "Instance-based learning predicts by similarity to stored examples. Model-based learning predicts through learned parameters.",
    "Insufficient data, nonrepresentative data, poor-quality data, and irrelevant features are model problems before they are algorithm problems.",
    "Overfitting means too much sensitivity to training quirks. Underfitting means too little capacity or signal to capture the pattern.",
    "Hyperparameters are choices set before or around training, not parameters learned directly from the training data.",
    "Validation data is for model selection. Test data is for the final generalization estimate.",
    "Data mismatch means your validation or test set does not represent the data the system will face after deployment.",
  ],
  recallCards: [
    {
      prompt: "What is the shortest useful definition of machine learning?",
      answer:
        "A system improves at a task by learning from training instances, guided by a performance measure, instead of relying only on hand-written rules.",
    },
    {
      prompt: "When should you avoid ML?",
      answer:
        "When deterministic rules are simpler, labels are unavailable or unreliable, the cost of mistakes is unmanaged, or the problem does not actually need adaptation.",
    },
    {
      prompt: "What is the difference between overfitting and underfitting?",
      answer:
        "Overfitting captures training noise and fails on new data; underfitting is too weak to capture the real pattern.",
    },
    {
      prompt: "Why is the test set protected?",
      answer:
        "It estimates final generalization. If you tune against it, it stops being an honest measure of unseen performance.",
    },
    {
      prompt: "What is the difference between a parameter and a hyperparameter?",
      answer:
        "A parameter is learned from training data. A hyperparameter is chosen outside that direct learning loop, such as regularization strength or model complexity.",
    },
    {
      prompt: "What does nonrepresentative training data do?",
      answer:
        "It teaches the model a distorted view of the world, so validation can look good while deployment fails on underrepresented cases.",
    },
    {
      prompt: "Why is online learning risky?",
      answer:
        "It adapts quickly, but bad feedback, drift, spam, or corrupted data can quickly push the model in the wrong direction.",
    },
    {
      prompt: "What is data mismatch?",
      answer:
        "The training, validation, test, or production distributions differ enough that one split no longer predicts performance on another.",
    },
    {
      prompt: "How do you spot overfitting from scores?",
      answer:
        "Training performance is high, but validation or test performance lags. The model learned training quirks more than the real task.",
    },
    {
      prompt: "How do you spot underfitting from scores?",
      answer:
        "Both training and validation performance are poor. The model, features, or training setup is too weak to capture the pattern.",
    },
  ],
  practicePrompts: [
    {
      title: "Frame a system",
      prompt:
        "Pick one product you use daily. Identify the decision it makes, the likely input data, the prediction target, and whether it is supervised, unsupervised, or reinforcement learning.",
    },
    {
      title: "Debug a bad model",
      prompt:
        "A model performs well in training but poorly after launch. List five possible causes from this chapter before mentioning a new algorithm.",
    },
    {
      title: "Explain it aloud",
      prompt:
        "Give a 60-second explanation of why validation data, test data, and production data must be treated differently.",
    },
    {
      title: "Design the feedback loop",
      prompt:
        "For a spam filter, define the training instances, labels, performance measure, retraining trigger, and one monitoring alert.",
    },
    {
      title: "Find the mismatch",
      prompt:
        "Imagine a model trained on last year's user behavior but deployed after a major UI redesign. Explain what data mismatch could appear and how you would validate it.",
    },
  ],
};

const chapterTwo: Chapter = {
  number: 2,
  slug: "end-to-end-machine-learning-project",
  title: "End-to-End Machine Learning Project",
  pages: "35-84",
  status: "curated",
  accent: "#86efac",
  iconName: "Workflow",
  summary:
    "A methodology-first read of the full end-to-end project: frame the problem, split data safely, explore signal, prepare features, train models, cross-validate, tune, inspect, test, and launch without fooling yourself.",
  sections: [
    {
      id: "problem-framing-questions",
      eyebrow: "Framing",
      title: "Questions to begin with in an ML problem",
      coreIdea:
        "Before touching models, define the business objective, the prediction target, the available signal, and how success will be measured.",
      theory: [
        "Start by asking what the system is supposed to do for the larger product or business workflow. The model is not the goal; the useful decision is the goal.",
        "Ask what prediction is needed, who will consume it, and what action will change because of it. A model that does not change a decision is usually wasted complexity.",
        "Ask what data is available now, what data will be available at prediction time, and whether the target can be measured reliably after the fact.",
        "Ask how the current solution works. A baseline, even if simple, gives you a reference point for whether ML is improving anything.",
        "Ask what mistakes cost. False positives, false negatives, slow predictions, biased predictions, and unstable predictions do not have equal consequences.",
        "Ask how the system will be monitored after launch. In the book's end-to-end style, the project does not end at training; launch and maintenance are part of the ML system.",
      ],
      examples: [
        "Housing price prediction: the practical question is not 'can we train a model?' but 'can we estimate district median housing value well enough to support downstream decisions?'",
        "A loan-risk model must know whether it is used to auto-approve, route for review, set interest rates, or only summarize risk for a human.",
        "A demand forecast must define the horizon: predicting next hour, next week, and next quarter are different ML problems.",
      ],
      useCases: [
        "Use these questions at the start of every project brief, notebook, design document, or interview answer.",
        "Use them when deciding whether the problem is worth ML or whether rules, analytics, or better data collection should come first.",
        "Use them to prevent premature algorithm choice. The right model family depends on the target, labels, evaluation metric, and deployment context.",
      ],
      traps: [
        "Starting with the algorithm instead of the decision. 'Let's use random forests' is not a problem definition.",
        "Using data that will not exist at prediction time. That creates leakage and makes offline performance fake.",
        "Optimizing a metric that does not represent the real cost of mistakes.",
      ],
      caseStudies: [
        {
          title: "A pricing model can fail before modeling begins",
          context:
            "Imagine a real-estate team asks for a price predictor, but the output will only be used to rank districts for manual review. In that case, exact dollar error may matter less than stable ranking, confidence intervals, and explainable drivers.",
          whyItMatters:
            "The same dataset can imply different ML problems depending on the downstream action.",
          pitfall:
            "Choosing a regression metric without asking how the prediction will be used.",
          takeaway:
            "Frame the decision first, then choose the target, metric, split strategy, and model class.",
        },
      ],
      retention: {
        remember:
          "A good ML project begins with the decision, target, available data, metric, baseline, mistake cost, and monitoring plan.",
        showsUp: "Project scoping, ML interviews, product specs, model cards, and notebook introductions.",
        oneLiner:
          "Do not ask 'which model?' first; ask 'what decision are we improving and how will we know?'",
      },
    },
    {
      id: "ml-design-decisions",
      eyebrow: "Decisions",
      title: "Supervised, unsupervised, regression, classification, or something else",
      coreIdea:
        "The first modeling decision is the learning setup: what feedback exists, what output is needed, and how the system will update.",
      theory: [
        "If examples include the correct answer, the problem is supervised. If the answer is a continuous value, it is regression. If the answer is a category, it is classification.",
        "If no target label exists and the goal is to discover structure, compress data, segment examples, or detect unusual cases, it leans unsupervised.",
        "If a small labeled set and a large unlabeled set are available, semisupervised learning may be useful, but Chapter 2 mainly keeps the project in supervised regression territory.",
        "If the system acts in an environment and learns from delayed rewards, it is reinforcement learning. Housing prices are not that kind of problem.",
        "Decide batch versus online separately. The housing example is naturally batch learning: train on historical data, evaluate, then deploy and periodically retrain.",
        "Decide single output versus multiple outputs. Predicting one median house value is single-output regression; predicting price and uncertainty would extend the task.",
      ],
      examples: [
        "Housing median value: supervised, batch, univariate regression because labels exist and the target is numeric.",
        "Predicting whether a district is above or below a threshold: supervised classification because the target becomes a class.",
        "Finding neighborhood types without target values: unsupervised clustering.",
        "Detecting impossible or suspicious districts: anomaly detection.",
      ],
      useCases: [
        "Use this section as your project-type checklist before reading any sklearn documentation.",
        "Use it when explaining why the chapter chooses regression rather than classification.",
        "Use it to convert vague product requests into precise ML task definitions.",
      ],
      traps: [
        "Confusing numeric-looking categories with regression. ZIP codes and region IDs may be numbers but behave like categories.",
        "Forcing classification by binning a naturally continuous target unless the decision truly needs categories.",
        "Ignoring whether labels are reliable. Supervised learning only works as well as the target signal.",
      ],
      tables: [
        {
          title: "Task decision table",
          columns: ["Question", "If yes", "Typical method"],
          rows: [
            ["Do you have labels?", "Yes", "Supervised learning"],
            ["Is the label numeric?", "Yes", "Regression"],
            ["Is the label a category?", "Yes", "Classification"],
            ["No labels, need structure?", "Yes", "Unsupervised learning"],
            ["Actions affect future rewards?", "Yes", "Reinforcement learning"],
            ["Data changes constantly?", "Yes", "Consider online learning"],
          ],
        },
      ],
      retention: {
        remember:
          "Chapter 2's housing project is supervised, batch, univariate regression with a numeric target.",
        showsUp: "Problem framing, model family choice, evaluation metric choice, and interview answers.",
        oneLiner:
          "The output and feedback decide the ML category before the algorithm enters the room.",
      },
    },
    {
      id: "notations-and-norms",
      eyebrow: "Notation",
      title: "Notation, RMSE, MAE, and L1/L2/Lk norms",
      coreIdea:
        "The chapter's notation is a compact way to talk about datasets, features, targets, errors, and distance; norms are different ways to summarize error size.",
      theory: [
        "A dataset is usually represented as rows and columns. Each row is an instance. Each input column is a feature. The target column is the label you want to predict.",
        "A feature vector is one instance represented as numbers. A model takes that vector and outputs a prediction.",
        "An error vector is the list of prediction mistakes across examples. A performance measure summarizes that error vector into one number.",
        "RMSE is based on the L2 norm. It squares errors, averages them, and takes the square root, so large errors are punished strongly.",
        "MAE is based on the L1 norm. It averages absolute errors, so it is less sensitive to very large outliers than RMSE.",
        "The index in L1, L2, or Lk tells you the norm order. L1 means sum absolute values. L2 means Euclidean length. Lk generalizes this idea by raising absolute values to the kth power, summing, then taking the kth root.",
        "As k gets larger, the norm cares more about the largest components of the error vector. That is why RMSE reacts strongly when a few predictions are very wrong.",
      ],
      examples: [
        "Errors [2, 2, 2] and [0, 0, 6] can have the same average scale in some views, but RMSE makes the single large miss look worse.",
        "Use RMSE when large errors are especially bad. Use MAE when you want a more robust average absolute miss.",
        "In housing, a very wrong district value can be costly, so RMSE is a common default unless outliers dominate unfairly.",
      ],
      useCases: [
        "Use L1/MAE when outliers should not dominate the metric.",
        "Use L2/RMSE when large errors should be made more visible.",
        "Use norm language to understand why different metrics rank models differently.",
      ],
      traps: [
        "Thinking L1, L2, and Lk are model names. They are ways to measure vector size or error size.",
        "Forgetting units. RMSE and MAE are in the same unit as the target after the final square root or absolute average.",
        "Choosing RMSE by habit without checking whether large outliers are meaningful or noisy.",
      ],
      tables: [
        {
          title: "Norm intuition",
          columns: ["Norm", "Plain meaning", "Metric connection", "Behavior"],
          rows: [
            ["L1", "Sum of absolute values", "MAE", "Robust, treats errors linearly"],
            ["L2", "Euclidean length", "RMSE", "Punishes large errors more"],
            ["Lk", "Generalized norm order", "Minkowski-style family", "Higher k focuses more on largest components"],
          ],
        },
      ],
      retention: {
        remember:
          "The norm index is the power used to summarize vector size: L1 absolute, L2 squared/Euclidean, Lk generalized.",
        showsUp: "Performance measures, distance calculations, regularization, and model comparison.",
        oneLiner:
          "RMSE shouts about big mistakes; MAE speaks in average absolute misses.",
      },
    },
    {
      id: "train-test-splitting",
      eyebrow: "Splitting",
      title: "Train/test split and keeping the same test set",
      coreIdea:
        "The test set must stay stable and unseen so it can estimate how the model performs on new data.",
      theory: [
        "A test set is a held-out sample used to estimate generalization. If you repeatedly learn from it, it becomes part of the training loop.",
        "A random split changes unless you control randomness. That is why `random_state` matters: it makes the random split reproducible across runs with the same data order.",
        "If the dataset grows over time, `random_state` alone may not keep old instances in the same split. A common solution is to split by a stable identifier using a hash.",
        "The test set should be created early, before deep exploration, to reduce the chance of pattern leakage from human decisions.",
        "The split ratio is a design choice. The chapter uses a typical holdout idea, often around 20 percent for testing, but the right ratio depends on dataset size and risk.",
      ],
      examples: [
        "`train_test_split(housing, test_size=0.2, random_state=42)` creates a reproducible random split for the current dataset order.",
        "A hash-based split assigns instances by stable ID, so rerunning after appending new rows keeps existing rows in the same bucket.",
        "If a row has no stable ID, you may build one from stable fields, but you must avoid fields that change over time.",
      ],
      useCases: [
        "Use random splitting for quick experiments when rows are independent and distribution is simple.",
        "Use stable ID hashing when the dataset will be refreshed and you want test membership to persist.",
        "Use stratified splitting when an important feature must have similar proportions in train and test.",
      ],
      traps: [
        "Shuffling time-series data randomly when the real task predicts the future from the past.",
        "Letting duplicate or related rows appear in both train and test, which leaks information.",
        "Changing the test set repeatedly until performance looks good.",
      ],
      codeExamples: [
        {
          title: "Reproducible random split",
          language: "python",
          code: `from sklearn.model_selection import train_test_split

train_set, test_set = train_test_split(
    housing,
    test_size=0.2,
    random_state=42,
)`,
          notes: [
            "`test_size=0.2` holds out 20 percent of the rows.",
            "`random_state=42` makes the split reproducible for the same input data.",
            "Use this for quick experiments, but remember that appending rows can still reshuffle membership unless the split is ID-based.",
          ],
        },
      ],
      tables: [
        {
          title: "Random split versus persistent split",
          columns: ["Approach", "Best for", "Risk"],
          rows: [
            ["Plain random split", "Fast first experiments", "Different run can create a different test set"],
            ["Random split with random_state", "Reproducible current dataset", "New or reordered data can still affect membership"],
            ["Stable hash by ID", "Datasets refreshed over time", "Requires a stable unique identifier"],
            ["Stratified split", "Important feature proportions must match", "Requires sensible strata, especially for continuous features"],
          ],
        },
      ],
      retention: {
        remember:
          "The test set is a protected estimate of new-case performance; make it stable before exploration trains your intuition on it.",
        showsUp: "Every supervised ML workflow, notebooks, benchmarks, and production model evaluation.",
        oneLiner:
          "`random_state` freezes randomness for a run; stable IDs freeze membership across data refreshes.",
      },
    },
    {
      id: "stratification-income-bins",
      eyebrow: "Stratification",
      title: "Stratification, pd.cut(), and continuous important features",
      coreIdea:
        "When an important feature strongly affects the target, train and test should preserve its distribution; continuous features need bins before stratification.",
      theory: [
        "A purely random test set can accidentally underrepresent important subgroups. Stratified sampling reduces that risk by preserving category proportions.",
        "The chapter identifies median income as important for housing value, so the split should keep income distribution similar in train and test.",
        "Stratification needs discrete strata. If the important feature is continuous, create bins first, then stratify on the bin column.",
        "`pd.cut()` converts a continuous variable into interval categories. This is a methodology move: you are preserving distribution, not making a final model feature.",
        "After splitting, remove the temporary stratification column so it does not accidentally become part of the model input.",
      ],
      examples: [
        "Median income is continuous, so create `income_cat` bins before calling `train_test_split(..., stratify=housing['income_cat'])`.",
        "If one income range is rare, stratification helps ensure both train and test include it in roughly similar proportions.",
        "If the bins are too narrow, some strata may have too few examples. If bins are too broad, stratification loses detail.",
      ],
      useCases: [
        "Use stratification when one feature is known to be highly predictive or business-critical.",
        "Use it when random sampling may distort rare but important groups.",
        "Use it when the test set must represent the population distribution for a key attribute.",
      ],
      traps: [
        "Stratifying on too many features at once and creating tiny strata.",
        "Forgetting to drop the helper bin column after splitting.",
        "Choosing bins mechanically without checking whether they represent meaningful ranges.",
      ],
      tables: [
        {
          title: "Random versus stratified sampling",
          columns: ["Point", "Random sampling", "Stratified sampling"],
          rows: [
            ["Goal", "Sample rows randomly", "Preserve proportions of important groups"],
            ["Best when", "Dataset is large and balanced", "A key feature strongly affects the target"],
            ["Risk", "Important subgroup can be over/underrepresented", "Bad bins can create misleading strata"],
            ["Housing example", "May distort income distribution", "Keeps income categories aligned across train/test"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Create income bins and stratified split",
          language: "python",
          code: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split

housing["income_cat"] = pd.cut(
    housing["median_income"],
    bins=[0.0, 1.5, 3.0, 4.5, 6.0, np.inf],
    labels=[1, 2, 3, 4, 5],
)

strat_train_set, strat_test_set = train_test_split(
    housing,
    test_size=0.2,
    random_state=42,
    stratify=housing["income_cat"],
)

for set_ in (strat_train_set, strat_test_set):
    set_.drop("income_cat", axis=1, inplace=True)`,
          notes: [
            "`pd.cut()` turns continuous `median_income` into interval categories.",
            "`bins` defines interval edges; `np.inf` captures all high-end values.",
            "`labels` names the resulting categories.",
            "`stratify=` tells sklearn to preserve category proportions in train and test.",
            "The temporary `income_cat` column is dropped after the split.",
          ],
        },
      ],
      retention: {
        remember:
          "Stratify on a key feature when random sampling might distort the test set; bin continuous features first.",
        showsUp: "Dataset splitting, bias control, small datasets, population-representative evaluation.",
        oneLiner:
          "Random split asks for rows; stratified split asks for the right proportions.",
      },
    },
    {
      id: "correlation-and-attribute-combinations",
      eyebrow: "Exploration",
      title: "Correlation, nonlinear relationships, and attribute combinations",
      coreIdea:
        "Exploration should reveal useful signals and limitations: correlation helps with linear relationships, but it can miss nonlinear structure and hide feature-combination opportunities.",
      theory: [
        "After creating a clean training set, explore only the training data. The test set should remain untouched.",
        "A correlation matrix helps estimate how numeric attributes linearly move with the target.",
        "Correlation coefficient ranges from -1 to 1. Close to 1 means strong positive linear association. Close to -1 means strong negative linear association. Close to 0 means no linear association, not necessarily no relationship.",
        "Correlation does not measure slope. Height in feet, inches, or nanometers can have perfect correlation because the relationship is exactly linear, even though the scale changes.",
        "Correlation can completely miss nonlinear relationships. If y rises when x is near a certain value but falls elsewhere, linear correlation may be near zero.",
        "Attribute combinations are often more meaningful than raw features. Rooms per household, bedrooms per room, or population per household can express real housing structure better than raw counts.",
        "Feature engineering is the act of injecting useful knowledge into the representation. Good feature engineering makes the model's job easier; bad feature engineering adds noise, fake ordering, leakage, or brittle assumptions.",
      ],
      examples: [
        "`median_income` usually has a strong positive relationship with `median_house_value` in the housing dataset.",
        "`total_rooms` alone may be less meaningful than `rooms_per_household` because districts have different population sizes.",
        "`total_bedrooms / total_rooms` can reveal whether homes are bedroom-heavy, which may carry signal beyond raw bedroom count.",
        "Good feature engineering: `rooms_per_household` adds relevant context because the same room count means different things in a district of 200 households versus 2,000 households.",
        "Bad feature engineering: converting a categorical region code into a numeric distance-like feature can make the model believe code 20 is twice code 10, even when the numbers are only labels.",
      ],
      useCases: [
        "Use correlation to prioritize numeric features for deeper inspection.",
        "Use scatterplots to check whether a relationship is linear, capped, clustered, or nonlinear.",
        "Use attribute combinations when raw columns describe totals but the meaningful signal is a ratio or density.",
      ],
      traps: [
        "Treating correlation as causation.",
        "Assuming correlation near zero means independence. It only means weak linear association.",
        "Creating attribute combinations using information that would not be available at prediction time.",
        "Exploring the test set and accidentally shaping model decisions around it.",
        "Adding target-leaking features such as future sale price, post-event review status, or any column that is only known after the prediction should already have been made.",
      ],
      caseStudies: [
        {
          title: "Good ratio, bad shortcut",
          context:
            "In the housing project, `rooms_per_household` can reveal whether districts contain larger homes, while raw `total_rooms` mostly reflects district size. But a shortcut such as an arbitrary neighborhood ID treated as a number can inject false distance and fake ordering.",
          whyItMatters:
            "Feature engineering is not just adding columns. It is deciding which knowledge should be visible to the model and which accidental patterns should be hidden.",
          pitfall:
            "A model can over-trust engineered features that encode irrelevant structure or information unavailable at prediction time.",
          takeaway:
            "Good features compress real domain meaning; bad features smuggle in noise, leakage, or fake relationships.",
        },
      ],
      codeExamples: [
        {
          title: "Correlation with target",
          language: "python",
          code: `corr_matrix = housing.corr(numeric_only=True)
corr_matrix["median_house_value"].sort_values(ascending=False)`,
          highlights: [
            "Compute correlation on numeric columns only.",
            "Read high correlation as a lead for investigation, not proof.",
          ],
          notes: [
            "`numeric_only=True` avoids non-numeric columns when computing correlations.",
            "Sort the target column to quickly see which numeric attributes move most linearly with `median_house_value`.",
            "Use this as a signal-finding tool, not proof of causation.",
          ],
        },
        {
          title: "Attribute combinations",
          language: "python",
          code: `housing["rooms_per_household"] = housing["total_rooms"] / housing["households"]
housing["bedrooms_per_room"] = housing["total_bedrooms"] / housing["total_rooms"]
housing["population_per_household"] = housing["population"] / housing["households"]`,
          highlights: [
            "Ratios often beat raw totals when district sizes vary.",
            "Recheck correlations and validation scores after adding features.",
          ],
          notes: [
            "Ratios can convert raw totals into features with clearer meaning.",
            "After creating combinations, recompute correlations and inspect whether the new attributes carry stronger signal.",
            "Feature ideas should come from domain meaning, not random arithmetic.",
          ],
        },
      ],
      tables: [
        {
          title: "Feature engineering: useful versus harmful",
          columns: ["Feature idea", "Why it helps or hurts", "Decision"],
          rows: [
            ["rooms_per_household", "Normalizes room count by district size and better describes homes", "Good candidate"],
            ["bedrooms_per_room", "Captures bedroom-heavy versus spacious layouts", "Good candidate"],
            ["raw district ID as a number", "Creates fake order and fake distance between categories", "Avoid or encode categorically"],
            ["future approval status", "Leaks information that would not exist at prediction time", "Never use"],
          ],
        },
      ],
      retention: {
        remember:
          "Correlation is a linear signal detector; plots and attribute combinations reveal structure it may miss.",
        showsUp: "Exploratory data analysis, feature engineering, model debugging, and interview discussions of EDA.",
        oneLiner:
          "Use correlation to ask better questions, not to declare truth.",
      },
    },
    {
      id: "data-cleaning-and-imputation",
      eyebrow: "Preparation",
      title: "Data cleaning: three methods and SimpleImputer",
      coreIdea:
        "Missing values are not a small formatting problem; the choice to drop rows, drop columns, or fill values changes what the model is allowed to learn.",
      theory: [
        "The book introduces three practical options for a missing numeric attribute: remove rows with missing values, remove the entire attribute, or fill missing values with a replacement such as the median.",
        "Drop rows when the missing rows are rare, randomly missing, and not strategically important. Do not drop rows if missingness is common, biased toward a subgroup, or itself meaningful.",
        "Drop the column when the feature is mostly missing, unreliable, expensive to repair, or weakly related to the target. Do not drop it just because imputation feels inconvenient.",
        "Fill missing values when the feature is useful and you want to preserve examples. Median is often safer than mean for skewed housing-style data because extreme values move the mean more.",
        "`SimpleImputer` learns replacement values during `fit()` and applies them during `transform()`. This is important because the test set must use statistics learned from the training set, not its own statistics.",
      ],
      examples: [
        "Housing has missing `total_bedrooms`, so median imputation keeps the feature and keeps the rows.",
        "Dropping a district because one column is missing can waste labels when the dataset is not huge.",
        "If a sensor column is missing for 90 percent of rows and cannot be trusted, dropping the column may be more honest than pretending it is measured.",
      ],
      useCases: [
        "Use cleaning decisions before model training and before building the pipeline.",
        "Use imputation when production data can also arrive with missing values.",
        "Use the same imputer object in training and inference so the preprocessing behavior stays consistent.",
      ],
      traps: [
        "Fitting the imputer on the full dataset before the split. That leaks test-set statistics into training.",
        "Using mean imputation blindly on skewed data.",
        "Deleting rows until the dataset no longer represents the real population.",
      ],
      tables: [
        {
          title: "Missing-value choices",
          columns: ["Method", "When to use", "When not to use"],
          rows: [
            ["Drop rows", "Few missing rows, missingness looks random", "Many missing rows or rare groups would disappear"],
            ["Drop column", "Column is mostly missing, noisy, or low-value", "Column is predictive and can be repaired"],
            ["Fill values", "Feature matters and missing values are expected", "Missingness carries meaning you should model separately"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Three cleaning choices",
          language: "python",
          code: `# Option 1: drop rows where total_bedrooms is missing
housing_drop_rows = housing.dropna(subset=["total_bedrooms"])

# Option 2: drop the whole attribute
housing_drop_column = housing.drop("total_bedrooms", axis=1)

# Option 3: fill missing values with the training median
median = housing["total_bedrooms"].median()
housing_filled = housing.copy()
housing_filled["total_bedrooms"] = housing_filled["total_bedrooms"].fillna(median)`,
          highlights: [
            "`axis=1` means drop a column, not rows.",
            "Compute replacement values from training data only.",
          ],
          notes: [
            "These are concept examples. In a real workflow, prefer putting the chosen strategy inside a pipeline.",
            "Median imputation is robust when the column has large outliers.",
          ],
        },
        {
          title: "SimpleImputer pattern",
          language: "python",
          code: `import numpy as np
import pandas as pd
from sklearn.impute import SimpleImputer

imputer = SimpleImputer(strategy="median")
housing_num = housing.select_dtypes(include=[np.number])

imputer.fit(housing_num)
X = imputer.transform(housing_num)

housing_tr = pd.DataFrame(
    X,
    columns=housing_num.columns,
    index=housing_num.index,
)`,
          highlights: [
            "`fit()` learns medians from the training data.",
            "`transform()` applies those learned medians.",
            "Wrap transformed arrays back into a DataFrame when column names help inspection.",
          ],
          notes: [
            "`SimpleImputer` outputs a NumPy array, so a DataFrame wrapper is useful for readable exploration.",
            "Later, the same imputer belongs inside the numeric pipeline.",
          ],
        },
      ],
      retention: {
        remember:
          "Missing values force a modeling decision: remove examples, remove the feature, or learn a stable replacement from training data.",
        showsUp: "Data preparation, production inference, pipelines, and leakage prevention.",
        oneLiner:
          "Impute with training statistics; never let the test set teach preprocessing.",
      },
    },
    {
      id: "scikit-learn-design-and-transformers",
      eyebrow: "Sklearn",
      title: "Estimators, transformers, predictors, and custom transformers",
      coreIdea:
        "Scikit-learn works because objects follow a small shared contract: learn from data with `fit()`, change data with `transform()`, and predict with `predict()`.",
      theory: [
        "An estimator is any object that estimates parameters from data using `fit()`. `SimpleImputer`, `StandardScaler`, `LinearRegression`, and `RandomForestRegressor` are all estimators.",
        "A transformer is an estimator that can transform data. It exposes `transform()` and usually `fit_transform()`.",
        "A predictor is an estimator that can make predictions. It exposes `predict()` and usually `score()`.",
        "`fit_transform()` is a convenience method: learn parameters and immediately transform the same data. In pipelines, this keeps each step consistent.",
        "Custom transformers let you put feature engineering inside the same pipeline as imputation, scaling, and encoding. That matters because production inference must repeat the exact training-time transformations.",
      ],
      examples: [
        "`SimpleImputer.fit()` learns medians; `SimpleImputer.transform()` fills missing values.",
        "`StandardScaler.fit()` learns means and standard deviations; `StandardScaler.transform()` standardizes values.",
        "`LinearRegression.fit()` learns coefficients; `LinearRegression.predict()` returns predicted values.",
      ],
      useCases: [
        "Use the sklearn object model to compose reliable preprocessing and modeling workflows.",
        "Use custom transformers when feature combinations must be repeatable across train, validation, test, and production.",
        "Use `BaseEstimator` and `TransformerMixin` so your transformer works cleanly with pipelines and grid search.",
      ],
      traps: [
        "Doing feature engineering manually in a notebook cell, then forgetting to repeat it at inference time.",
        "Letting a transformer learn from test data by calling `fit_transform()` on the test set.",
        "Putting model choices in `transform()` instead of keeping transformation deterministic after `fit()`.",
      ],
      tables: [
        {
          title: "Scikit-learn object roles",
          columns: ["Role", "Methods", "Meaning"],
          rows: [
            ["Estimator", "`fit()`", "Learns parameters from data"],
            ["Transformer", "`fit()`, `transform()`, `fit_transform()`", "Learns preprocessing parameters and changes input features"],
            ["Predictor", "`fit()`, `predict()`, often `score()`", "Learns a model and returns predictions"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Custom attribute-combination transformer",
          language: "python",
          code: `from sklearn.base import BaseEstimator, TransformerMixin

rooms_ix, bedrooms_ix, population_ix, households_ix = 3, 4, 5, 6

class CombinedAttributesAdder(BaseEstimator, TransformerMixin):
    def __init__(self, add_bedrooms_per_room=True):
        self.add_bedrooms_per_room = add_bedrooms_per_room

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        rooms_per_household = X[:, rooms_ix] / X[:, households_ix]
        population_per_household = X[:, population_ix] / X[:, households_ix]

        if self.add_bedrooms_per_room:
            bedrooms_per_room = X[:, bedrooms_ix] / X[:, rooms_ix]
            return np.c_[X, rooms_per_household, population_per_household, bedrooms_per_room]

        return np.c_[X, rooms_per_household, population_per_household]`,
          highlights: [
            "`__init__` stores hyperparameters, not learned data.",
            "`fit()` returns `self` so the transformer follows sklearn's API.",
            "`transform()` creates the engineered columns.",
          ],
          notes: [
            "`add_bedrooms_per_room` becomes a tunable preprocessing hyperparameter.",
            "The book uses index constants because the transformer receives a NumPy array at this point.",
          ],
        },
      ],
      retention: {
        remember:
          "Estimator learns, transformer changes features, predictor makes predictions; pipelines depend on this contract.",
        showsUp: "Imputation, scaling, one-hot encoding, custom feature engineering, model training, and grid search.",
        oneLiner:
          "If a step must happen in production, put it behind `fit()`/`transform()` and pipeline it.",
      },
    },
    {
      id: "categorical-and-text-encoding",
      eyebrow: "Encoding",
      title: "Categorical data, ordinal traps, one-hot encoding, and high-cardinality enums",
      coreIdea:
        "Models need numbers, but how you turn categories into numbers controls what relationships the model is allowed to assume.",
      theory: [
        "Text-based categorical attributes such as `ocean_proximity` are not free text in the housing example; they are enumerated categories.",
        "Ordinal encoding maps categories to integers. This is only safe when order and distance are meaningful, such as bad, average, good, excellent if the order is truly intended.",
        "The pitfall: many models treat nearby numbers as closer. If `INLAND` becomes 0 and `NEAR BAY` becomes 1, the model may assume artificial closeness.",
        "One-hot encoding creates one binary attribute per category. A category is present as 1 and absent as 0, so the model does not inherit a fake numeric order.",
        "Scikit-learn's `OneHotEncoder` returns a sparse matrix by default. That is efficient because most category indicators are zero.",
        "For 200-category enums such as country codes, one-hot may still work for linear models and trees if data is large enough, but it can become wide and sparse. Alternatives include grouping rare categories, using domain hierarchy, target encoding with strict cross-validation, hashing, embeddings, or dropping the feature if it adds little value.",
      ],
      examples: [
        "`ocean_proximity` should usually be one-hot encoded because the categories are nominal, not ordered.",
        "`good`, `better`, `best` may be ordinal if the distances are intentionally monotonic, but even then the numeric spacing is an assumption.",
        "Country code with 200 values may need rare-country grouping or a hashing encoder if the model and dataset cannot handle a wide one-hot representation.",
      ],
      useCases: [
        "Use one-hot encoding for small to medium nominal categorical variables.",
        "Use ordinal encoding only when the order is real and useful.",
        "Use high-cardinality strategies when category count is large, many categories are rare, or new categories appear in production.",
      ],
      traps: [
        "Ordinal-encoding unordered categories and making the model believe category 4 is closer to 5 than to 1.",
        "Forcing dense one-hot arrays for large categories and blowing up memory.",
        "Using target encoding without leakage-safe cross-validation.",
      ],
      tables: [
        {
          title: "Categorical encoding decisions",
          columns: ["Situation", "Good default", "Watch out"],
          rows: [
            ["Few unordered categories", "OneHotEncoder", "Sparse output is normal"],
            ["True ordered scale", "OrdinalEncoder", "Spacing between labels is still an assumption"],
            ["Hundreds of categories", "Group rare values, hash, target encode carefully, or embeddings", "Leakage and sparse high-dimensional data"],
            ["Free text", "Text vectorization or embeddings", "Do not treat sentences as simple enums"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Ordinal versus one-hot encoding",
          language: "python",
          code: `from sklearn.preprocessing import OrdinalEncoder, OneHotEncoder

housing_cat = housing[["ocean_proximity"]]

ordinal_encoder = OrdinalEncoder()
housing_cat_encoded = ordinal_encoder.fit_transform(housing_cat)

cat_encoder = OneHotEncoder()
housing_cat_1hot = cat_encoder.fit_transform(housing_cat)

cat_encoder.categories_`,
          highlights: [
            "Use double brackets to keep a DataFrame with one column.",
            "`OneHotEncoder` returns a sparse matrix by default.",
            "`categories_` shows the learned category order.",
          ],
          notes: [
            "Ordinal encoding is shown because it is simple, not because it is always appropriate.",
            "For dense output in newer sklearn versions, use `OneHotEncoder(sparse_output=False)`, but avoid dense output for large category sets.",
          ],
        },
      ],
      retention: {
        remember:
          "Encoding is not just conversion to numbers; it defines what category relationships the model can see.",
        showsUp: "Pipelines, feature preparation, text/category columns, and production category drift.",
        oneLiner:
          "Use ordinal for true order, one-hot for names, and special handling for huge category lists.",
      },
    },
    {
      id: "feature-scaling-and-pipelines",
      eyebrow: "Pipeline",
      title: "Feature scaling and transformation pipelines",
      coreIdea:
        "A complete preprocessing pipeline makes numeric scale, missing values, categories, and engineered features repeatable instead of notebook-only.",
      theory: [
        "Many ML algorithms behave better when numeric features have comparable scales. Housing features such as income, population, and room counts live on different ranges.",
        "Min-max scaling shifts and rescales values into a fixed range, usually 0 to 1: `(x - min) / (max - min)`. It preserves relative position within the observed range.",
        "Min-max scaling is useful when bounded inputs are desired, but it is sensitive to outliers because one extreme value stretches the whole range.",
        "Standardization subtracts the mean and divides by the standard deviation. The result has mean 0 and unit variance on the training set.",
        "`StandardScaler` is less affected by extreme min/max values than min-max scaling, though it still does not remove outliers.",
        "An industry-style preprocessing flow is usually: split data, separate labels, build numeric/categorical pipelines, impute, engineer features, scale numeric values, encode categories, combine with `ColumnTransformer`, then train and validate models.",
      ],
      examples: [
        "Linear models and gradient-based methods are usually sensitive to feature scale.",
        "Tree models often need less scaling, but keeping a consistent pipeline can still simplify experimentation.",
        "The full pipeline lets you call `fit_transform()` on training data and only `transform()` on validation/test data.",
      ],
      useCases: [
        "Use pipelines whenever preprocessing has more than one step.",
        "Use `ColumnTransformer` when numeric and categorical columns need different transformations.",
        "Use standardization as a strong default when the model is scale-sensitive and outliers are not dominating.",
      ],
      traps: [
        "Scaling before the train/test split, which leaks global statistics.",
        "Calling `fit_transform()` on test data instead of `transform()`.",
        "Assuming min-max scaled production values cannot go outside 0 to 1. New data can exceed the training min/max.",
      ],
      tables: [
        {
          title: "Scaling methods",
          columns: ["Scaler", "Formula / idea", "Advantage", "Risk"],
          rows: [
            ["MinMaxScaler", "(x - min) / (max - min)", "Puts values into a known range", "Very sensitive to outliers"],
            ["StandardScaler", "(x - mean) / standard deviation", "Centers data and gives unit variance", "Does not remove outliers"],
          ],
        },
        {
          title: "Practical preprocessing pipeline",
          columns: ["Step", "Purpose"],
          rows: [
            ["1. Split train/test", "Protect final evaluation"],
            ["2. Separate labels", "Avoid transforming the target as an input feature"],
            ["3. Numeric imputation", "Repair missing numeric values"],
            ["4. Feature engineering", "Add meaningful ratios or derived attributes"],
            ["5. Numeric scaling", "Make scales comparable where needed"],
            ["6. Categorical encoding", "Convert categories without fake order"],
            ["7. ColumnTransformer", "Combine numeric and categorical outputs into one model-ready matrix"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Numeric and categorical preprocessing pipeline",
          language: "python",
          code: `from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

num_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("attribs_adder", CombinedAttributesAdder()),
    ("std_scaler", StandardScaler()),
])

num_attribs = list(housing_num)
cat_attribs = ["ocean_proximity"]

full_pipeline = ColumnTransformer([
    ("num", num_pipeline, num_attribs),
    ("cat", OneHotEncoder(), cat_attribs),
])

housing_prepared = full_pipeline.fit_transform(housing)`,
          highlights: [
            "`Pipeline` runs steps in order.",
            "`ColumnTransformer` applies different logic to numeric and categorical columns.",
            "Use `fit_transform()` on training data only.",
          ],
          notes: [
            "Each tuple is `(name, transformer, columns)` in `ColumnTransformer`.",
            "The resulting `housing_prepared` is the model-ready matrix.",
          ],
        },
      ],
      retention: {
        remember:
          "Preprocessing is part of the model system; pipeline it so training, validation, testing, and deployment use the same transformations.",
        showsUp: "Every real sklearn project, model serving, reproducible notebooks, and hyperparameter search.",
        oneLiner:
          "Split first, fit preprocessing on train, transform everything else with the learned pipeline.",
      },
    },
    {
      id: "training-evaluating-and-overfitting",
      eyebrow: "Models",
      title: "Training-set evaluation, underfitting, overfitting, and Random Forests",
      coreIdea:
        "Training error tells you whether the model can fit the training data, but it does not prove the model generalizes.",
      theory: [
        "Linear regression is a simple baseline for numeric prediction. It learns a weighted sum of features and is often useful as a first reality check.",
        "Mean squared error averages squared mistakes. RMSE takes the square root so the result is in target units. In housing, that means dollar-like units.",
        "If linear regression has high training error and high validation error, it is underfitting: the model is too simple, the features are weak, or the data is noisy.",
        "A decision tree can fit complex patterns. If it has near-zero training error but poor validation error, it is overfitting: it memorized training quirks.",
        "A good model has training and validation errors that are both acceptable and reasonably close. Overfit models look brilliant on training data and disappointing on fresh folds.",
        "Random Forests train many decision trees and average them. This usually reduces variance and improves generalization compared with one unconstrained tree.",
        "Two direct overfitting remedies emphasized by the book's logic are getting more training data and constraining the model. Constraints include max depth, min samples per leaf, fewer features, pruning, or regularization depending on the model.",
      ],
      examples: [
        "Linear regression underfits if it cannot capture nonlinear district structure.",
        "A decision tree can drive training RMSE to zero because leaves can become too specific.",
        "Random Forests usually perform better than a single tree because averaging reduces reliance on any one tree's memorized quirks.",
      ],
      useCases: [
        "Use a simple baseline before celebrating complex models.",
        "Use training error plus validation error to diagnose underfit versus overfit.",
        "Use ensembles like Random Forests when a single high-variance model overfits.",
      ],
      traps: [
        "Judging a model only by training RMSE.",
        "Calling a model good because it has zero training error.",
        "Trying many models on the test set and turning the test set into a tuning set.",
      ],
      tables: [
        {
          title: "Model diagnosis",
          columns: ["Pattern", "Likely issue", "What to try"],
          rows: [
            ["High train error, high validation error", "Underfitting", "Better features, more flexible model, less regularization"],
            ["Low train error, high validation error", "Overfitting", "More data, constraints, simpler model, regularization"],
            ["Low train error, low validation error", "Promising fit", "Tune, inspect errors, then final test once"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Linear regression baseline with RMSE",
          language: "python",
          code: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

lin_reg = LinearRegression()
lin_reg.fit(housing_prepared, housing_labels)

housing_predictions = lin_reg.predict(housing_prepared)
lin_rmse = mean_squared_error(
    housing_labels,
    housing_predictions,
    squared=False,
)`,
          highlights: [
            "`fit()` trains the model on prepared features and labels.",
            "`squared=False` returns RMSE instead of MSE.",
            "Training RMSE alone is not a generalization score.",
          ],
          notes: [
            "If your sklearn version provides `root_mean_squared_error`, it can be used directly.",
            "A baseline is valuable even when it is not the final model.",
          ],
        },
        {
          title: "Decision tree and Random Forest checks",
          language: "python",
          code: `from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor

tree_reg = DecisionTreeRegressor(random_state=42)
tree_reg.fit(housing_prepared, housing_labels)

forest_reg = RandomForestRegressor(random_state=42)
forest_reg.fit(housing_prepared, housing_labels)`,
          highlights: [
            "A decision tree with no constraints can overfit badly.",
            "Random Forest averages many trees to reduce variance.",
            "Evaluate these with cross-validation, not only training RMSE.",
          ],
          notes: [
            "The model objects here are predictors: after `fit()`, use `predict()`.",
            "Constraints such as `max_depth` and `min_samples_leaf` are hyperparameters.",
          ],
        },
      ],
      retention: {
        remember:
          "Training error diagnoses fit on known data; validation error diagnoses generalization.",
        showsUp: "Baseline modeling, overfit debugging, model comparison, and interview model-selection questions.",
        oneLiner:
          "Underfit misses the pattern; overfit memorizes the sample; good fit generalizes.",
      },
    },
    {
      id: "cross-validation",
      eyebrow: "Validation",
      title: "Cross-validation: the holy grail for honest model comparison",
      coreIdea:
        "Cross-validation repeatedly trains fresh copies of the model on different training folds and evaluates on held-out folds, giving a more stable estimate than one validation split.",
      theory: [
        "In k-fold cross-validation, the training set is split into k folds. For each round, one fold becomes validation data and the other k-1 folds become training data.",
        "The model does not learn fold 1, then carry memory into fold 2. Scikit-learn clones a fresh estimator each round. Each score comes from an independent training run with a different held-out fold.",
        "The folds are dependent as samples from the same original training set, but the trained estimator instances are separate. The usefulness comes from seeing whether performance is stable across different held-out subsets.",
        "Cross-validation is not epochs. Epochs are repeated passes over training data for one model. Cross-validation is repeated train/evaluate experiments for model assessment.",
        "The book uses `cross_val_score()` with negative MSE because sklearn's scoring convention is 'higher is better'. Negative MSE must be flipped before taking RMSE.",
      ],
      examples: [
        "With `cv=10`, the model trains 10 times. Each time, 90 percent of the training data is used to fit and 10 percent is used to score.",
        "If one fold performs much worse, inspect whether a subgroup or data-quality issue is unevenly distributed.",
        "Cross-validation can reveal that a zero-training-error decision tree is not actually reliable.",
      ],
      useCases: [
        "Use CV to compare candidate models without touching the test set.",
        "Use CV mean and standard deviation to understand typical performance and stability.",
        "Use CV inside grid/randomized search to choose hyperparameters more reliably.",
      ],
      traps: [
        "Thinking the model improves across folds like training epochs.",
        "Preprocessing outside the CV pipeline, which leaks validation-fold information.",
        "Using CV scores to tune endlessly until you overfit the validation process.",
      ],
      tables: [
        {
          title: "What happens in 5-fold CV",
          columns: ["Round", "Training folds", "Validation fold", "Model memory"],
          rows: [
            ["1", "2, 3, 4, 5", "1", "Fresh clone"],
            ["2", "1, 3, 4, 5", "2", "Fresh clone"],
            ["3", "1, 2, 4, 5", "3", "Fresh clone"],
            ["4", "1, 2, 3, 5", "4", "Fresh clone"],
            ["5", "1, 2, 3, 4", "5", "Fresh clone"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Cross-validation RMSE",
          language: "python",
          code: `from sklearn.model_selection import cross_val_score

scores = cross_val_score(
    tree_reg,
    housing_prepared,
    housing_labels,
    scoring="neg_mean_squared_error",
    cv=10,
)

tree_rmse_scores = np.sqrt(-scores)
tree_rmse_scores.mean()
tree_rmse_scores.std()`,
          highlights: [
            "`cv=10` means 10 separate train/validation rounds.",
            "`cross_val_score` clones the estimator; folds do not continue learning from each other.",
            "Use `np.sqrt(-scores)` because sklearn returns negative MSE for this scorer.",
          ],
          notes: [
            "Mean score estimates typical performance; standard deviation estimates fold-to-fold stability.",
            "Keep preprocessing inside the pipeline when using CV in production-quality code.",
          ],
        },
      ],
      retention: {
        remember:
          "Cross-validation trains fresh models on different folds; it measures stability, not sequential learning.",
        showsUp: "Model comparison, hyperparameter search, overfit detection, and leaderboard-free evaluation.",
        oneLiner:
          "CV asks: does this model work across many held-out slices of the training data?",
      },
    },
    {
      id: "fine-tuning-models",
      eyebrow: "Tuning",
      title: "Fine-tuning models: hyperparameters, grid search, randomized search, and refit",
      coreIdea:
        "Hyperparameters are choices you set before training; tuning searches those choices without spending the final test set.",
      theory: [
        "Parameters are learned from data, such as linear regression coefficients or tree split thresholds. Hyperparameters are chosen by you, such as `n_estimators`, `max_features`, `max_depth`, learning rate, regularization strength, or whether to add `bedrooms_per_room`.",
        "Grid search tries every combination in a small explicit search space. It is systematic and easy to inspect, but it becomes expensive as options multiply.",
        "Randomized search samples combinations from distributions. It is often better when many hyperparameters exist because it explores more unique values for the same compute budget.",
        "Gradient descent is an optimization method for learning model parameters in differentiable models. It is not the same as grid search. You usually do not use gradient descent to search random forest hyperparameters, but models trained by gradient descent have hyperparameters like learning rate and regularization.",
        "`GridSearchCV(..., refit=True)` retrains the best model on the full training set after CV chooses the best hyperparameters. That gives you a ready `best_estimator_`.",
        "The downside of grabbing `best_estimator_` directly is false confidence: it is best among the searched options, not guaranteed globally best, and repeated search decisions can overfit the validation process.",
        "Other standard approaches include manual informed search, successive halving, Bayesian optimization, evolutionary search, and domain-specific defaults followed by focused tuning.",
      ],
      examples: [
        "For Random Forests, `n_estimators` controls number of trees and `max_features` controls how many features each split considers.",
        "For regularized linear models, alpha or regularization strength is a hyperparameter.",
        "For gradient descent models, learning rate, batch size, number of epochs, and regularization are hyperparameters.",
      ],
      useCases: [
        "Use grid search when the search space is small and you want clear comparison tables.",
        "Use randomized search when the space is large or continuous.",
        "Use Bayesian/successive-halving methods when training is expensive and you need smarter allocation.",
      ],
      traps: [
        "Searching huge grids without a compute budget.",
        "Tuning on the test set.",
        "Assuming the best searched model is truly optimal.",
      ],
      tables: [
        {
          title: "Hyperparameter search choices",
          columns: ["Method", "Best for", "Tradeoff"],
          rows: [
            ["GridSearchCV", "Small, deliberate search spaces", "Can explode combinatorially"],
            ["RandomizedSearchCV", "Large or continuous spaces", "May miss a good narrow region"],
            ["Successive halving", "Allocating compute to promising candidates", "Needs careful resource definition"],
            ["Bayesian optimization", "Expensive model training", "More moving parts and assumptions"],
            ["Manual informed search", "Early experiments and domain intuition", "Can be biased or incomplete"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Grid search for Random Forest",
          language: "python",
          code: `from sklearn.model_selection import GridSearchCV

param_grid = [
    {"n_estimators": [3, 10, 30], "max_features": [2, 4, 6, 8]},
    {"bootstrap": [False], "n_estimators": [3, 10], "max_features": [2, 3, 4]},
]

forest_reg = RandomForestRegressor(random_state=42)

grid_search = GridSearchCV(
    forest_reg,
    param_grid,
    cv=5,
    scoring="neg_mean_squared_error",
    return_train_score=True,
    refit=True,
)

grid_search.fit(housing_prepared, housing_labels)
grid_search.best_params_
grid_search.best_estimator_`,
          highlights: [
            "`param_grid` is a list of dictionaries of hyperparameter choices.",
            "`cv=5` cross-validates every combination.",
            "`refit=True` retrains the best setting on the full training set.",
          ],
          notes: [
            "`return_train_score=True` helps compare train versus validation behavior.",
            "`best_estimator_` is convenient but only best within the searched grid.",
          ],
        },
        {
          title: "Randomized search",
          language: "python",
          code: `from scipy.stats import randint
from sklearn.model_selection import RandomizedSearchCV

param_distribs = {
    "n_estimators": randint(low=1, high=200),
    "max_features": randint(low=1, high=8),
}

random_search = RandomizedSearchCV(
    forest_reg,
    param_distributions=param_distribs,
    n_iter=30,
    cv=5,
    scoring="neg_mean_squared_error",
    random_state=42,
)

random_search.fit(housing_prepared, housing_labels)`,
          highlights: [
            "`n_iter` controls the number of sampled combinations.",
            "Distributions let the search explore many possible values.",
            "Use a fixed `random_state` for reproducible experiments.",
          ],
          notes: [
            "Randomized search often finds strong settings faster than a dense grid.",
            "Increase `n_iter` when the search space is broad and compute allows.",
          ],
        },
      ],
      retention: {
        remember:
          "Hyperparameters are choices around the learning process; tune them with validation, not the final test set.",
        showsUp: "Random Forest tuning, regularization, gradient-descent learning rates, model selection, and production retraining.",
        oneLiner:
          "Grid is exhaustive in a small box; random search samples a bigger box.",
      },
    },
    {
      id: "analyze-best-model-and-test-set",
      eyebrow: "Final Model",
      title: "Analyze the best model, evaluate on the test set, and read scenarios",
      coreIdea:
        "Before final testing, inspect what the chosen model uses; after final testing, treat the result as an estimate, not another tuning signal.",
      theory: [
        "Feature importances help you see which attributes the model relied on. In a Random Forest, importance scores can identify useful columns and candidates to drop.",
        "Dropping absolutely unnecessary columns can simplify the model, reduce noise, and make deployment easier, but only after validation confirms the drop does not hurt.",
        "The test set is used once at the end for an unbiased estimate. Use `full_pipeline.transform(X_test)`, not `fit_transform()`, because preprocessing must be learned from training data.",
        "A complete fail on the test set means the validation process did not represent reality. Possible causes: overfitting validation, leakage, data mismatch, bad split, or production-like subgroups missing from validation.",
        "A decent result means the workflow is working but can improve through better features, more data, targeted error analysis, stronger models, or tuned hyperparameters.",
        "A best-case result means training, validation, and test scores align with the project need. The next work is monitoring, confidence reporting, and deployment readiness, not endless test-set tweaking.",
      ],
      examples: [
        "If `median_income` and `INLAND` dominate importance, the model may be relying on economically meaningful and location-related signals.",
        "If a random ID column appears important, suspect leakage, memorization, or a bad split.",
        "If test RMSE is much worse than CV RMSE, check whether the test set has different income or location distribution.",
      ],
      useCases: [
        "Use importance scores for error analysis and feature pruning.",
        "Use final test evaluation to decide whether the model is ready for stakeholder review.",
        "Use scenario thinking to choose the next move instead of blindly tuning more.",
      ],
      traps: [
        "Calling test performance disappointing, then tuning against the test set repeatedly.",
        "Dropping features just because their importance is low in one model run.",
        "Trusting importance scores without checking correlated features and domain meaning.",
      ],
      tables: [
        {
          title: "Final test scenarios",
          columns: ["Scenario", "Likely meaning", "Next move"],
          rows: [
            ["Complete fail", "Validation was misleading, leakage/mismatch/overfit may exist", "Audit split, pipeline, leakage, subgroups, and error slices"],
            ["Decent work", "Model generalizes but leaves useful error", "Improve features, collect data, tune, or try stronger models"],
            ["Best work", "Performance meets the project need", "Package pipeline, document limits, deploy, and monitor"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Feature importances",
          language: "python",
          code: `feature_importances = grid_search.best_estimator_.feature_importances_

extra_attribs = ["rooms_per_household", "population_per_household", "bedrooms_per_room"]
cat_encoder = full_pipeline.named_transformers_["cat"]
cat_one_hot_attribs = list(cat_encoder.categories_[0])

attributes = num_attribs + extra_attribs + cat_one_hot_attribs
sorted(zip(feature_importances, attributes), reverse=True)`,
          highlights: [
            "`feature_importances_` explains which inputs the forest used most.",
            "Match scores back to transformed feature names before making decisions.",
            "Use importance as a guide, then validate dropped features.",
          ],
          notes: [
            "This is especially useful after one-hot encoding and feature engineering expand the column set.",
            "Correlated features can split importance, so do not read the ranking mechanically.",
          ],
        },
        {
          title: "Final test evaluation",
          language: "python",
          code: `final_model = grid_search.best_estimator_

X_test = strat_test_set.drop("median_house_value", axis=1)
y_test = strat_test_set["median_house_value"].copy()

X_test_prepared = full_pipeline.transform(X_test)
final_predictions = final_model.predict(X_test_prepared)

final_rmse = mean_squared_error(
    y_test,
    final_predictions,
    squared=False,
)`,
          highlights: [
            "Use `transform()` on the test set, never `fit_transform()`.",
            "Evaluate the final model once after model selection.",
            "Do not tune repeatedly on `final_rmse`.",
          ],
          notes: [
            "The final test score estimates performance on new districts from the same data-generating process.",
            "If final performance is surprising, investigate process issues before changing the model.",
          ],
        },
      ],
      retention: {
        remember:
          "Inspect the chosen model before final testing; after final testing, protect the test set from becoming a tuning tool.",
        showsUp: "Model reports, feature pruning, final evaluation, stakeholder demos, and deployment decisions.",
        oneLiner:
          "Validation chooses; test estimates; production monitors.",
      },
    },
    {
      id: "confidence-interval-and-launch",
      eyebrow: "Launch",
      title: "Confidence intervals and high-level deployment",
      coreIdea:
        "A final score is only an estimate; a confidence interval communicates uncertainty, and deployment turns the trained pipeline into a monitored service or batch process.",
      theory: [
        "A confidence interval gives a plausible range for the true performance measure based on the sample of test errors. Instead of saying the RMSE is one exact truth, it says the true RMSE is likely within a range under the assumptions of the calculation.",
        "In the chapter's style, you can compute a 95 percent confidence interval for RMSE from squared errors. This helps avoid overreacting to tiny score differences between models.",
        "Confidence intervals are useful when comparing models, reporting uncertainty to stakeholders, or deciding whether an improvement is meaningful enough to justify complexity.",
        "Deployment is high level at this stage: save the preprocessing pipeline and model, expose predictions through a web service, run batch scoring jobs, embed the model in an application, or schedule periodic retraining.",
        "A launched model needs monitoring: input distributions, missing values, prediction distributions, latency, error when labels arrive, and drift between training data and live data.",
      ],
      examples: [
        "If two models have RMSE estimates that differ by a tiny amount but confidence intervals overlap heavily, the simpler model may be preferable.",
        "A housing model could run as a batch job that scores districts nightly or as an API used by another planning system.",
        "If live income distribution drifts away from training distribution, the model may need retraining or data investigation.",
      ],
      useCases: [
        "Use confidence intervals when communicating model quality responsibly.",
        "Use deployment planning to decide what artifacts must be saved: preprocessing, model, schema, expected inputs, and monitoring checks.",
        "Use monitoring to catch data mismatch after launch.",
      ],
      traps: [
        "Reporting one score as if there is no sampling uncertainty.",
        "Deploying only the estimator while forgetting the preprocessing pipeline.",
        "Launching without a way to compare predictions against future labels.",
      ],
      tables: [
        {
          title: "Ways to use a trained model",
          columns: ["Deployment mode", "Good for", "Watch out"],
          rows: [
            ["Batch scoring", "Periodic reports, nightly jobs, offline decisions", "Stale predictions between runs"],
            ["Real-time API", "Interactive products and services", "Latency, uptime, schema validation"],
            ["Embedded model", "Local app/device inference", "Versioning and resource limits"],
            ["Human-in-the-loop tool", "Review workflows and risk decisions", "Clear confidence and explanation needs"],
            ["Scheduled retraining", "Changing data distributions", "Automated evaluation before replacing models"],
          ],
        },
      ],
      codeExamples: [
        {
          title: "Confidence interval for final RMSE",
          language: "python",
          code: `from scipy import stats

confidence = 0.95
squared_errors = (final_predictions - y_test) ** 2

interval = stats.t.interval(
    confidence,
    len(squared_errors) - 1,
    loc=squared_errors.mean(),
    scale=stats.sem(squared_errors),
)

rmse_interval = np.sqrt(interval)`,
          highlights: [
            "Use prediction errors from the untouched test set.",
            "`confidence=0.95` asks for a 95 percent interval.",
            "Take the square root because the interval is computed on squared errors.",
          ],
          notes: [
            "The interval is only as trustworthy as the test set's representativeness.",
            "Use it to communicate uncertainty, not to continue tuning on the test set.",
          ],
        },
      ],
      retention: {
        remember:
          "A score is an estimate with uncertainty; a deployed model is a monitored system, not a finished notebook.",
        showsUp: "Model reports, launch reviews, MLOps planning, drift monitoring, and stakeholder communication.",
        oneLiner:
          "Ship the pipeline, watch the data, and report performance as a range when the sample is finite.",
      },
    },
  ],
  reviewSnippets: [
    "Begin with the decision: what action will improve if the model predicts well?",
    "Chapter 2's housing task is supervised, batch, univariate regression.",
    "An instance is a row; a feature is an input column; the label is the target.",
    "RMSE uses L2 thinking and punishes large errors; MAE uses L1 thinking and is more outlier-resistant.",
    "The norm index in L1/L2/Lk tells you the power used to measure vector size.",
    "`random_state` makes a random split reproducible for the current data; stable ID hashing preserves membership over refreshes.",
    "Stratified sampling preserves important subgroup proportions in train and test.",
    "`pd.cut()` bins continuous values so they can be used for stratification.",
    "Drop temporary stratification columns after splitting.",
    "Correlation measures linear association only; nonlinear relationships can be missed completely.",
    "Perfect correlation says the relationship is linear; it does not say anything about slope size.",
    "Attribute combinations turn raw totals into meaningful ratios or densities.",
    "Good feature engineering adds relevant knowledge; bad feature engineering adds noise, leakage, or fake order.",
    "For missing values, choose between dropping rows, dropping the column, or filling values with an imputer.",
    "`SimpleImputer.fit()` learns replacement values; `transform()` applies them.",
    "In sklearn, estimators fit, transformers transform, and predictors predict.",
    "Ordinal encoding is only safe when order is real; one-hot encoding avoids fake closeness between names.",
    "`OneHotEncoder` returns a sparse matrix by default because most category indicators are zero.",
    "For high-cardinality enums, consider rare-category grouping, hashing, leakage-safe target encoding, embeddings, or dropping the feature.",
    "Min-max scaling uses `(x - min) / (max - min)`; standardization uses `(x - mean) / std`.",
    "Pipelines keep preprocessing repeatable across train, validation, test, and production.",
    "Linear regression is a baseline; high train and validation error suggests underfitting.",
    "A decision tree with near-zero training error and bad validation error is overfitting.",
    "Random Forests reduce variance by averaging many trees.",
    "Cross-validation trains fresh model clones on different held-out folds; it is not epochs.",
    "Grid search is exhaustive inside a small search space; randomized search samples a wider space.",
    "`refit=True` retrains the best searched model on the full training set.",
    "Feature importances are guides for analysis, not automatic deletion rules.",
    "On the final test set, use `full_pipeline.transform(X_test)`, never `fit_transform()`.",
    "A confidence interval gives a plausible range for true performance, not just one final score.",
    "Deployment means shipping the preprocessing pipeline, model, schema, monitoring, and retraining plan.",
  ],
  recallCards: [
    {
      prompt: "What questions should start an ML problem?",
      answer:
        "What decision improves, what target is needed, what data exists at prediction time, what metric matters, what baseline exists, and what mistakes cost.",
    },
    {
      prompt: "What type of task is the housing project?",
      answer:
        "Supervised batch regression, because labels exist, the target is numeric, and the model trains offline on historical data.",
    },
    {
      prompt: "What does `random_state` solve?",
      answer:
        "It makes the random split reproducible for the same input dataset and order.",
    },
    {
      prompt: "Why is `random_state` not always enough?",
      answer:
        "If rows are appended, removed, or reordered, old instances may not keep the same test membership unless splitting uses a stable ID.",
    },
    {
      prompt: "Why stratify on income in the housing dataset?",
      answer:
        "Median income is strongly related to median house value, so train and test should preserve income-category proportions.",
    },
    {
      prompt: "Why use `pd.cut()` before stratifying?",
      answer:
        "Stratification needs discrete categories, so a continuous feature like median income must be converted into bins.",
    },
    {
      prompt: "What does correlation miss?",
      answer:
        "It can miss nonlinear relationships and does not prove causation or indicate slope size.",
    },
    {
      prompt: "Why create attribute combinations?",
      answer:
        "Ratios like rooms per household can express the real signal better than raw totals.",
    },
    {
      prompt: "What are the three basic missing-value strategies?",
      answer:
        "Drop rows, drop the whole attribute, or fill missing values using a learned replacement such as the training median.",
    },
    {
      prompt: "What is the sklearn difference between estimator, transformer, and predictor?",
      answer:
        "An estimator learns with fit, a transformer changes data with transform, and a predictor outputs predictions with predict.",
    },
    {
      prompt: "Why is ordinal encoding dangerous for unordered categories?",
      answer:
        "It turns names into numbers and may make the model assume fake order or closeness between categories.",
    },
    {
      prompt: "Why is one-hot output sparse?",
      answer:
        "Each row activates only a few category indicators while most entries are zero, so sparse storage saves memory.",
    },
    {
      prompt: "What is the difference between min-max scaling and standardization?",
      answer:
        "Min-max scaling maps values by training min and max; standardization subtracts the training mean and divides by training standard deviation.",
    },
    {
      prompt: "How do you identify overfitting?",
      answer:
        "Training error is much better than validation error, meaning the model learned training quirks that do not generalize.",
    },
    {
      prompt: "Does cross-validation continue learning from fold to fold?",
      answer:
        "No. Sklearn clones a fresh estimator for each fold; folds are repeated independent assessments, not sequential epochs.",
    },
    {
      prompt: "What does `refit=True` do in GridSearchCV?",
      answer:
        "After cross-validation chooses the best hyperparameters, sklearn retrains that estimator on the full training set.",
    },
    {
      prompt: "What should happen on the final test set?",
      answer:
        "Transform it with the already-fitted pipeline, predict once, compute the final metric, and avoid using the score for more tuning.",
    },
    {
      prompt: "Why use a confidence interval for RMSE?",
      answer:
        "It communicates uncertainty in the estimated performance and helps avoid overreacting to tiny score differences.",
    },
  ],
  practicePrompts: [
    {
      title: "Frame the task",
      prompt:
        "Explain in 90 seconds why the housing project is supervised regression, what the target is, and what decision the prediction might support.",
    },
    {
      title: "Choose the split",
      prompt:
        "Given a dataset that will receive new rows every week, explain why a stable ID split may be safer than relying only on `random_state`.",
    },
    {
      title: "Defend stratification",
      prompt:
        "Explain why median income should be binned before stratification and what could go wrong if the random test set underrepresents high-income districts.",
    },
    {
      title: "Read correlation carefully",
      prompt:
        "Describe one case where correlation is near zero but the variables are clearly related, and explain why a scatterplot is needed.",
    },
    {
      title: "Choose a cleaning strategy",
      prompt:
        "For a useful numeric feature with 8 percent missing values and visible outliers, explain why median imputation inside a pipeline may be safer than dropping rows.",
    },
    {
      title: "Encode responsibly",
      prompt:
        "Explain why `ocean_proximity` should not be treated as a normal number, then choose an encoding strategy for 200 country-code categories.",
    },
    {
      title: "Diagnose model fit",
      prompt:
        "Compare a linear regression, an unconstrained decision tree, and a random forest using training error and cross-validation error. Name the likely underfit and overfit pattern.",
    },
    {
      title: "Explain cross-validation",
      prompt:
        "In your own words, explain why 10-fold cross-validation trains 10 separate models and why those folds are not epochs.",
    },
    {
      title: "Tune without leaking",
      prompt:
        "Describe a safe tuning workflow using GridSearchCV or RandomizedSearchCV, including where `refit=True`, `best_estimator_`, and the final test set fit in.",
    },
    {
      title: "Plan launch",
      prompt:
        "List the artifacts and monitors you would ship with the housing model: pipeline, model, schema, performance range, drift checks, and retraining trigger.",
    },
  ],
};

const templates: Chapter[] = [
  ["Classification", "classification", "85-108", "#f9a8d4", "BadgeCheck", "classification tasks and evaluation metrics"],
  ["Training Models", "training-models", "111-151", "#fbbf24", "TrendingUp", "optimization, regression, and regularized models"],
  ["Support Vector Machines", "support-vector-machines", "153-174", "#c4b5fd", "Network", "margins, kernels, and SVM decision functions"],
  ["Decision Trees", "decision-trees", "175-186", "#bef264", "GitBranch", "tree splits, impurity, and regularization"],
  ["Ensemble Learning and Random Forests", "ensemble-learning-and-random-forests", "189-211", "#67e8f9", "Layers3", "ensemble methods and model combination"],
  ["Dimensionality Reduction", "dimensionality-reduction", "213-233", "#fdba74", "Shrink", "PCA, manifolds, and high-dimensional data"],
  ["Unsupervised Learning Techniques", "unsupervised-learning-techniques", "235-275", "#5eead4", "ScanSearch", "clustering and density-based discovery"],
  ["Introduction to Artificial Neural Networks with Keras", "intro-to-artificial-neural-networks-with-keras", "279-327", "#93c5fd", "BrainCircuit", "neural network basics and Keras workflows"],
  ["Training Deep Neural Networks", "training-deep-neural-networks", "331-382", "#f0abfc", "Gauge", "deep training stability and optimization"],
  ["Custom Models and Training with TensorFlow", "custom-models-and-training-with-tensorflow", "383-426", "#fca5a5", "Box", "custom TensorFlow components and loops"],
  ["Loading and Preprocessing Data with TensorFlow", "loading-and-preprocessing-data-with-tensorflow", "427-486", "#a7f3d0", "Database", "data input pipelines and preprocessing"],
  ["Deep Computer Vision Using Convolutional Neural Networks", "deep-computer-vision-using-cnns", "489-537", "#fde68a", "Eye", "CNNs and vision tasks"],
  ["Processing Sequences Using RNNs and CNNs", "processing-sequences-using-rnns-and-cnns", "539-576", "#ddd6fe", "Waves", "sequence modeling and forecasting"],
  ["Natural Language Processing with RNNs and Attention", "natural-language-processing-with-rnns-and-attention", "577-625", "#bfdbfe", "MessageSquareText", "language modeling and attention"],
  ["Representation Learning and Generative Learning Using Autoencoders and GANs", "representation-learning-and-generative-learning", "627-682", "#f9a8d4", "Sparkles", "autoencoders and GANs"],
  ["Reinforcement Learning", "reinforcement-learning", "683-721", "#c084fc", "Gamepad2", "agents, rewards, and policies"],
  ["Training and Deploying TensorFlow Models at Scale", "training-and-deploying-tensorflow-models-at-scale", "723-762", "#7dd3fc", "Cloud", "serving, deployment, and scale"],
].map(([title, slug, pages, accent, iconName, focus], index) => ({
  number: index + 3,
  slug,
  title,
  pages,
  status: "template",
  accent,
  iconName,
  summary: `Template ready for ${focus}.`,
  sections: [templateSection(title, focus)],
  reviewSnippets: [],
  recallCards: [],
  practicePrompts: [],
})) as Chapter[];

export const chapters: Chapter[] = [chapterOne, chapterTwo, ...templates];

export const chapterNav = chapters.map(
  ({ number, slug, title, status, accent, iconName }) => ({
    number,
    slug,
    title,
    status,
    accent,
    iconName,
  }),
);

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = chapters.findIndex((chapter) => chapter.slug === slug);

  return {
    previous: index > 0 ? chapters[index - 1] : undefined,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined,
  };
}
