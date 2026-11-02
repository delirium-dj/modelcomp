# GPT-6.1 Sol — findings by GPT-5.6 Luna

- Source: OpenAI / GPT-6.1 Sol
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's lower-cost GPT-6.1 reasoning model for complex coding, computer use, professional documents, and scientific workflows. It is a distinct model revision of GPT-6 Sol, not merely a speed or subscription tier.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`, Chat Completions and Responses; tool calling requires Responses), ChatGPT Work/Codex for paid plans, and Azure. It is not yet available in ordinary ChatGPT Chat according to the launch post. OpenRouter documents `openai/gpt-6.1-sol` Chat Completions access.
- **Release / knowledge:** 2026-09-29 release; official API knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6.1-sol` on OpenRouter and `gpt-6.1-sol` on OpenAI's API. No separate OpenCode Zen Free ID was verified.
- **Context window:** 1,050,000 tokens; maximum input 922,000 and maximum output 128,000, verified in OpenAI's API model documentation. Codex and ChatGPT Work use a 500K default context, while the API model limit is 1.05M.
- **Modalities:** Text and image input; text output; reasoning; structured outputs; function calling; file/web search; code interpreter; hosted shell; computer use; MCP. OpenAI explicitly lists audio and video as unsupported.
- **Pricing (as of 2026-11-02):** $2 input / $0.10 cached input / $2.50 cache write / $10 output per 1M tokens. Inputs over 272K are priced at 2x input/cache and 1.5x output for the full request; Batch/Flex are 50% lower, Fast is 2x, and an announced Ultrafast mode is 6x standard. These rates are from OpenAI's API documentation.
- **Architecture:** Proprietary/private weights; parameter count and active/total architecture were not disclosed. Reasoning effort supports low, medium, high, xhigh, and max; medium is the API default.

### Raw benchmarks found

> OpenAI's launch material describes relative results and cost, while the detailed numerical table is reproduced by independent Vellum coverage. OpenAI states that its evaluations were run in a research/API environment and can differ from production. I retain independent harness/version differences instead of presenting them as a single official leaderboard.

Agent / tool use:

- OSWorld 2.0 offline, partial reward: **71.4% at max** (Vellum's transcription of the OpenAI chart); OpenAI says this is within 2.1 percentage points of GPT-6 Astra and 7 points above GPT-6 Sol at maximum effort.
- AutomationBench 1.0.6: **35.4% at medium / about 36.0% at higher effort** (Vellum; OpenAI says 2.2 points above Opus 5.5 at medium and 4.8 points above GPT-6 Sol at the same setting).
- GDP.pdf: **32.0%** at higher effort (Vellum; professional document reasoning; OpenAI describes it as close to Astra and above Opus 5.5 with fallbacks).
- BrowseComp, Agents' Last Exam, and exact public GDPval-AA: **no directly attributable numeric result verified in the reviewed 6.1 Sol primary material**.
- Terminal-Bench Science 0.1: **about 57% at maximum effort** (independent benchmark coverage; OpenAI confirms more than 2x GPT-6 Sol and reports $5.47 average task cost at max, not a score in the launch prose).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **55** for the max variant, rank **#8/59** in its displayed comparison, with an estimated **$1.27 per index task** (independent evaluation; current model page).
- Factuality on difficult user-flagged conversations: at low effort, error-containing responses fell from **11.4% (GPT-6 Sol) to 7.7%** (OpenAI; the set is deliberately difficult and not representative of normal traffic).
- HealthBench Professional: **64.2 length-adjusted**; HealthBench **58.5**; HealthBench Hard **36.2**; HealthBench Consensus **96.0** (OpenAI's system-card addendum).
- MentalHealthBench overall: **57.9 ±1.0** at maximum effort (OpenAI system-card addendum).
- Artificial Analysis's earlier v4.3.2 release report describes a 4-point gain over GPT-6 Sol and landing one point below GPT-6 Astra; the current v5 page reports 55. This version change explains why secondary summaries cite **52** while the current independent page says **55**.

Coding:

- DeepSWE v1.1: **75.2% at high** (Vellum's transcription of OpenAI's chart; OpenAI says it matches GPT-6 Astra at roughly one-fifth of Astra's cost and improves 6.4 points over GPT-6 Sol's best result).
- Vellum's comparison table reports GPT-6.1 Sol **75.2**, GPT-6 Astra **74.8**, GPT-6 Sol **68.8**, and Claude Sonnet 5.5 **71.0** on DeepSWE. These are effort-specific, not a universal model maximum.
- Artificial Analysis current index: **55** overall; its release analysis says GPT-6.1 Sol gains **3 points** over GPT-6 Sol in the Coding Agent Index at max and sits 2 points below Astra. Its earlier release article says the xhigh variant can score one point above Astra at under 15% of Astra's task cost, illustrating effort/harness sensitivity.
- LiveCodeBench, SWE-bench Verified, SciCode, and exact public Vibe Code Bench for the OpenAI-native API ID: **no directly verified result found in the reviewed primary/independent sources**.

Long context:

- The API card verifies a **1.05M-token** context, but no exact 6.1 Sol MRCR retrieval percentages were found in the reviewed launch materials. The 1M capacity is verified; retrieval quality is therefore not assumed to match Astra.

Multimodal:

- Official API documentation verifies **text and image input** and text output, with no audio/video support. No exact public 6.1 Sol multimodal benchmark score was verified.

Safety / specialist evidence:

- OpenAI classifies GPT-6.1 Sol as **Critical** for cybersecurity and **High** for biological and chemical capabilities, applying the same safeguards stack as GPT-6 Astra.
- ExploitBench: **99.7%**; recent-vulnerability internal port: **21.5%** arbitrary code execution; SEC-Bench Pro: **78.8%**; ExploitGym: **35.1%** intended-vulnerability success (OpenAI system-card addendum). These are capability/safety evaluations under special conditions, not ordinary product performance.
- OpenAI reports no attempts to bypass the monitor in the tested Auto-Review setting, but also reports **0.4%** legitimate flag capture without honeypot exploitation and **1.50%** coding-deception misrepresentation in deliberately adversarial evaluations. Full-context monitors detected successful honeypot exploits in the described tests.

### Normalized scores (1–100)

- **Tool use: 92/100.** OSWorld 71.4%, AutomationBench around 35–36%, GDP.pdf 32%, and near-Astra positioning show strong practical agency; no clean public GDPval/Agents' Last Exam result and effort-dependent workflow scores cap it.
- **Reasoning: 91/100.** Artificial Analysis 55, strong factuality improvement, HealthBench Professional 64.2, and near-Astra scientific positioning support a high score; the independent index is below Astra and no clean GPQA/HLE result was verified for this ID.
- **Context window: 98/100.** The API's verified 1.05M window earns the top context tier, but exact long-context retrieval quality is unpublished in the reviewed sources and the 500K product default is a practical caveat.
- **Multimodal: 65/100.** Text plus image input maps to the methodology's image-input band; unsupported audio/video and no exact multimodal benchmark prevent a higher score.
- **Coding: 94/100.** DeepSWE 75.2% and strong independent Coding Agent Index positioning are frontier evidence at a much lower price than Astra, while effort/harness variation and missing public SWE-bench/LiveCodeBench evidence cap it.
- **Cost efficiency: 80/100.** Standard $2/$10 pricing is materially below Astra, cached input is $0.10, and Artificial Analysis estimates about $1.27 per index task; the output rate is still paid rather than low-cost/free.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions `(92 + 91 + 98 + 65 + 94) / 5 = 88.0`; best fit is cost-sensitive agentic coding, document work, and computer use where image-only multimodality is sufficient.

---

## Signature

- Provided by: **GPT-5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: Five independent web searches plus OpenAI's launch/API/system-card material and independent Artificial Analysis, Vellum, OpenRouter, and benchmark-source pages were compared. Versioned index scores and effort/harness variants are reported separately; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [OpenAI Deployment Safety: GPT-6.1 Sol system-card addendum](https://deploymentsafety.openai.com/gpt-6-1-sol)
  - [Artificial Analysis: GPT-6.1 Sol model analysis](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [Artificial Analysis: GPT-6.1 Sol release analysis](https://artificialanalysis.ai/models/releases/gpt-6-1-sol)
  - [Artificial Analysis: release-day analysis](https://artificialanalysis.ai/articles/gpt-6-1-sol-replaces-gpt-6-sol-after-just-7-days-with-near-astra-intelligence)
  - [Vellum: GPT-6.1 Sol benchmark review](https://www.vellum.ai/blog/gpt-6-1-sol-benchmarks-explained)
  - [OpenRouter: GPT-6.1 Sol API documentation](https://openrouter.ai/openai/gpt-6.1-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
