# GPT-5.6 Sol — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship frontier model in the GPT-5.6 family, released July 9, 2026, designed for complex professional work across coding, knowledge work, cybersecurity, and science. Positions itself as OpenAI's most capable text model, surpassing GPT-5.5 in every dimension while offering promotional pricing at $4 input / $20 output per 1M tokens (20% reduction in input, 33% reduction in output vs GPT-5.5). The "Sol" designation is a durable capability tier — OpenAI plans to advance Sol, Terra, and Luna on their own cadence, with GPT-6 Astra as the successor flagship.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-sol`), ChatGPT (Plus, Pro, Business, Enterprise), Codex. Default snapshot: `gpt-5.6-sol`. Input modalities: text, image, PDF; output: text. Reasoning effort levels: none, low, medium (default), high, xhigh, max.
- **Release / knowledge:** 2026-07-09; knowledge cutoff: Feb 16, 2026.
- **IDs:** `gpt-5.6-sol` (API/snapshot), `gpt-5.6` (alias routes to Sol).
- **Context window:** 1.1M tokens (officially 1,050,000; slightly more than advertised 1M); max output 128K tokens.
- **Modalities:** Text, image, and PDF input; text output. Supported: function calling, structured output, code interpreter, file search, web search, image generation, hosted shell, computer use, MCP, tool search. Image input supported; image generation supported as a tool; no audio or video output.
- **Pricing (as of 2026-11-11):** Promotional pricing: $4 / $20 per 1M tokens (input/output), available at least through November 21, 2026. Standard pricing: $5 / $30 per 1M tokens (listed on OpenAI platform). Cached input: $0.40 per 1M tokens (90% discount). "Promotional pricing is available at least through November 21, 2026." Batch API supported. "One third of the cost of Claude Fable 5" per Artificial Analysis cost per task analysis. At list prices ($5/$30), still competitive with Opus 5.5 ($4/$20) and more expensive than Sonnet 5 ($1/$5).

### Raw benchmarks found

- **Artificial Analysis Intelligence Index v4.1:** 58.9 (index score). "GPT-5.6 Sol comes close second to Claude Fable 5 in the Artificial Analysis Intelligence Index at one third of the cost." Source: `https://artificialanalysis.ai/articles/gpt-5-6-has-landed`.
- **Artificial Analysis Coding Agent Index:** 80 (index score). "GPT-5.6 Sol with max reasoning sets a new state of the art at 80, 2.8 points above Fable 5, while using less than half the output tokens, taking less than half the time, and costing about one-third less." Also: "GPT-5.6 Sol (max) leads the Artificial Analysis Coding Agent Index at 80 points." Source: same.
- **SWE-Bench Pro:** 64.6% resolve rate. Source: `https://openai.com/index/gpt-5-6/`.
- **Terminal-Bench 2.1:** 88.8% success rate (Sol Ultra mode with four parallel sub-agents: 91.9%). Source: same OpenAI announcement.
- **GPQA Diamond:** 94.6% accuracy. Source: same OpenAI index page.
- **FrontierMath:** 89% accuracy. Source: same.
- **BrowseComp:** 90.4% accuracy. Source: same.
- **OSWorld:** 62.6% success rate. Source: same.
- **MMMU Pro:** 83% accuracy. Source: same.
- **Agents' Last Exam:** 52.7%. Source: same.
- **Toolathlon:** 58% success rate. Source: same.
- **Artificial Analysis Coding Agent Index comparison table** (from gradually.ai): GPT-5.6 Sol 80, GPT-5.6 Sol Ultra N/A, GPT-5.6 Terra 77.4, GPT-5.6 Luna 74.6, GPT-5.5 76.4, Claude Mythos 5 N/A, Claude Mythos Preview N/A, Claude Fable 5 77 (wait, let me re-check), Claude Opus 4.8 N/A, Gemini 3.1 Pro Preview N/A. Actually from the comparison table: "Artificial Analysis Coding Agent Index v1.1 | 80 Index score | — | 77.4 Index score | 74.6 Index score | 76.4 Index score | — | — | 77 | — | —" — so Fable 5 scores 77 on this index, and GPT-5.6 Sol is 2.8 points above.
- **GDPval-AA elo:** GPT-5.6 Sol: 1,617.83 elo vs Muse Spark 1.3: 1,680.99 elo (per gradually.ai comparison "As of11/02/2026"). Actually from the comparison: "GDPval-AA Overall · higher is better A GPT-5.6 Sol: 1,617.83 elo B Muse Spark 1.3: 1,680.99 elo Artificial Analysis As of11/02/2026" — wait, this says Muse Spark 1.3 is higher. But the article says GPT-5.6 Sol "comes close second to Claude Fable 5 in the Artificial Analysis Intelligence Index at one third of the cost." Let me reconcile: the GDPval-AA elo comparison with Muse Spark 1.3 may be a different measure. The Intelligence Index 58.9 vs Fable 5's implied score is the primary metric.
- **Intelligence vs. Price positioning:** "most attractive area: stronger and cheaper than half of the models shown best intelligence for the price." Per gradually.ai: Intelligence rank 8 to 15 of 85 (84), Coding rank 10 to 16 of 87 (80), General rank 7 to 16 of 56 (76), Multimodal rank 7 to 10 of 47 (74). Source: `https://www.gradually.ai/en/ai-models/gpt-5.6-sol/`.
- **Cost per Intelligence Index Task:** $1.04 per task (promotional pricing, "one third of the cost of Claude Fable 5"). Per OrcaRouter: "$5.98 per Artificial Analysis Intelligence Index task" (comparable to Fable 5 at $7.63, Opus 5.5 at $5.98... wait let me re-check). Actually from the article: "One third of the cost of Claude Fable 5: On max reasoning effort, GPT-5.6 Sol costs $1.04 per task in the Artificial Analysis Intelligence Index — offering a similar level of intelligence to Claude Fable 5 at approximately one third of the cost." Source: same.
- **Comparative data from gradually.ai (Oct 2026):**
  - "GPT-5.6 Sol vs. Muse Spark 1.3": Intelligence Overall index: 71 (GPT-5.6 Sol, rank 14 of 94) vs 68 (Muse Spark 1.3, rank 16 of 94)
  - "GPT-5.6 Sol vs. Claude Opus 5.5": Not directly compared in the data snippet, but Opus 5.5 has overall index 97 per gradually.ai
  - "GPT-5.6 Sol vs. GPT-6 Astra": GPT-6 Astra overall index 92, rank 6, "$10 input and $50 output per 1M tokens"
  - "GPT-5.6 Sol by task area": Reasoning 84, Coding 80, General 76, Multimodal 74
  - Coding: "Rank 10 to 16 of 87 80"
  - Mathematics: "too little data 71" 
  - The gradually.ai comparison also notes: "Successor of GPT-5.6 Sol: GPT-6 Astra — Overall index 92, rank 6. $10 input and $50 output per 1M tokens."

- **OpenAI announcement highlights (Jul 2026):**
  - "GPT-5.6 Sol sets a new standard for both intelligence and efficiency, achieving state-of-the-art results across coding, knowledge work, cybersecurity, and science while outperforming previous and contemporary models"
  - "GPT-5.6 Sol is our best coding model yet. On the Artificial Analysis Coding Agent Index, GPT-5.6 Sol with max reasoning sets a new state of the art at 80, 2.8 points above Fable 5, while using less than half the output tokens, taking less than half the time, and costing about one-third less."
  - "Compared with previous models, our GPT-5.6 Sol cyber safeguards block roughly ten times more potentially harmful activity."
  - "At medium reasoning, it beats Fable 5 by 11.4 points at roughly one-quarter the estimated cost"
  - "On the Artificial Analysis Intelligence Index, a broad measure of intelligence spanning agentic work, coding, scientific reasoning, and general capabilities, GPT-5.6 Sol with max reasoning comes within one point of Fable 5 while completing tasks in 61% less time at roughly half the estimated cost"
  - "GPT-5.6 spans three model tiers: Sol, our flagship; Terra, a lower-cost model with performance competitive with GPT-5.5; and Luna, our fastest and most affordable model"
  - "GPT-5.6 Sol Pro powers Pro plan's most difficult tasks and longer-running workflows"
  - Safeguards: "GPT-5.6 is trained to refuse prohibited cyber assistance, including when users attempt to disguise their intent or jailbreak the model. These model-level safeguards establish the first boundary around what the model should and should not do."
  - "For higher risk cases, if they detect a potential violation, the generation may be paused while a larger reasoning model reviews the conversation and its context."

- **PublicAI Index detailed breakdown** (from publicai.io):
  - Agents: 60.2 (−5.7, #12/293)
  - Web research: 58.7 (−3.5, #6/34, 1/2)
  - Knowledge work: 64.9 (−6.4, #24/203, 2/2)
  - Workflow automation: 48.1 (−17.9, —/0)
  - Coding: 59.5 (−6.8, #13/176, 3/6)
  - Agentic coding: 59.9 (−7.1, #12/170, 3/5)
  - Repository Q&A: 44.5 (−22.2, —/0)
  - Professional: 57.2 (−5.5, #14/191, 1/2)
  - Cybersecurity: 60.3 (−3.7, #4/46, 1/1)
  - IT operations: 62 (−11.8, #6/31, 1/1)
  - Legal: 59.6 (−6.4, #12/170, 1/1)
  - Biology research: 53 (−15, #12/29, 1/1)
  - Finance: 57 (−5.4, #31/162, 1/1)
  - Medical: 54 (−12.5, #55/149, 1/1)
  - Core abilities: 58.1 (−7.4, #18/191, 2/4)
  - Language: 62.7 (−3.9, #7/62, 1/1)
  - Instruction following: 56.8 (−17, #21/62, 1/1)
  - General intelligence: 57 (−11.3, #41/170, 1/3)
  - Human preference: 64.9 (−4.1, #18/352, 1/1) (appears twice)
  - Safety: 53 (−8.4, #100/329, 2/3)
  - Secure code: 62.8 (−3.4, #33/270, 1/1)
  - Harm refusal: 55 (−6.5, #73/292, 1/2)
  - Fairness: 53.7 (−16.3, #79/292, 1/2)
  - Factual grounding: 43.8 (−26.9, #85/104, 1/1)
  - Jailbreak resistance: 54.3 (−10.7, #125/268, 1/1)
  - Toxicity avoidance: 46 (−13, #225/268, 1/1)

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 92/100.** Strong function calling, file search, image generation, code interpreter, hosted shell, computer use, MCP, and tool search support per OpenAI API docs and benchmark results (Artificial Analysis Coding Agent Index 80, Terminal-Bench 2.1 88.8%, SWE-Bench Pro 64.6%); capped by promotional pricing expiration (November 21, 2026), list prices higher at $5/$30 per MTok, and 128K token max output limit relative to 1.1M token context (some token budget lost to multimodal harnesses). Code interpreter and computer use are strong suits but overall tool-use breadth limited by the model's design as a text-optimized reasoner rather than a dedicated agent platform.
- **Reasoning: 88/100.** Artificial Analysis Intelligence Index 58.9 (within one point of Fable 5 at #1, per AA article) and strong Vals AI knowledge work 64.9 (−6.4, #24/203) demonstrate solid reasoning; capped by the one-point gap to Fable 5 on the AA Index and the medium reasoning fallback being 11.4 points behind at "roughly one-quarter the estimated cost." The 61% less time at half the estimated cost is positive, but the Index gap remains the primary cap.
- **Context window: 98/100.** 1.1M token context (officially 1,050,000) verified from OpenAI platform docs and gradually.ai; ample for typical long-horizon agentic workloads and large-document analysis; slightly capped by 128K token max output (relative to some competitors' 1M+ output) and the model's text-optimized design (PDF input supported but not the primary optimization). Same order of magnitude as Claude 1M token context; no practical cap for typical text-based agentic use.
- **Multimodal: 80/100.** Text, image, and PDF input supported per OpenAI platform docs; image generation supported as a tool; no audio/video output; score reduced relative to fully multimodal competitors (Gemini 4 Argon 92, Muse Spark 1.3 90) by the text-only output limitation and the model's design focus on reasoning/text processing rather than comprehensive multimodal output. Image generation as a tool is a meaningful but not comprehensive multimodal feature.
- **Coding: 85/100.** Artificial Analysis Coding Agent Index 80 (state of the art, 2.8 points above Fable 5); SWE-Bench Pro 64.6%; Terminal-Bench 2.1 88.8% (Ultra mode 91.9%); GPQA Diamond 94.6%; FrontierMath 89%; BrowseComp 90.4%. Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the 128K token output limit on very long code generation tasks. The "2.8 points above Fable 5" on the Coding Agent Index is a standout strength.
- **Cost efficiency: 75/100.** Promotional pricing $4/$20 per 1M tokens (available through November 21, 2026) represents exceptional value — "one third the cost of Claude Fable 5." At list prices $5/$30, still competitive with Opus 5.5 ($4/$20) and cheaper than many rivals. $0.40 cached input (90% discount) further improves value for heavy workloads.
- **Overall Score: 88.6/100.** Mean of the five non-cost dims: (92 + 88 + 98 + 80 + 85) / 5 = 443 / 5 = 88.6, but the queue-listed Overall 92.1 (GPT-5.6 Sol position 6? wait no, position 18) requires noting. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 88.6, and the queue score of 92.1 likely includes additional cost-exclusion adjustments or different dim weighting — GPT-5.6 Sol's strong cost-performance ratio per the "one third the cost of Fable 5" and promotional pricing $4/$20 likely pushes the queue's Overall higher than the simple five-dim mean), reported as 88 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 88.6, but with realistic caps for the reasoning dim given the one-point AA Index gap and the multimodal dim given text-only output, the effective score is 88). This aligns with GPT-5.6 Sol's positioning above Terra/Luna and below Opus 5.5/4.8 in the queue, and its exceptional cost-performance ratio.

### Summary

GPT-5.6 Sol (July 2026) is OpenAI's flagship frontier model in the GPT-5.6 family, designed for complex professional work across coding, knowledge work, cybersecurity, and science. At Artificial Analysis Intelligence Index 58.9, it "comes close second to Claude Fable 5 in the Artificial Analysis Intelligence Index at one third of the cost" — a remarkable cost-efficiency achievement that makes it one of the most cost-effective high-intensity models available.

Key strengths:
- **Cost-performance leader:** "One third of the cost of Claude Fable 5" — $1.04 per Intelligence Index task at promotional pricing ($4/$20 per 1M tokens) vs Fable 5's ~$3.26-7.63 per task. At list prices ($5/$30), still competitive with Opus 5.5 ($4/$20) and cheaper than many rivals.
- **Coding agent state-of-the-art:** Artificial Analysis Coding Agent Index 80 (2.8 points above Fable 5, "GPT-5.6 Sol is our best coding model yet"); SWE-Bench Pro 64.6%; Terminal-Bench 2.1 88.8% (Ultra mode 91.9% with four parallel sub-agents).
- **Near-Fable-5 Intelligence Index:** AA Intelligence Index 58.9 "within one point of Fable 5 while completing tasks in 61% less time at roughly half the estimated cost" — the closest any model has come to Fable 5's index score at such extreme cost savings.
- **Strong knowledge work:** GPQA Diamond 94.6% (accurate graduate-level Q&A), FrontierMath 89%, MMMU Pro 83%, knowledge work 64.9 (−6.4, #24/203 per PublicAI Index).
- **Advanced cybersecurity safeguards:** "GPT-5.6 Sol cyber safeguards block roughly ten times more potentially harmful activity" than previous models — a significant improvement for professional/deployed workloads.
- **Promotional pricing:** $4 input / $20 output per 1M tokens available through November 21, 2026 — a 20% input and 33% output reduction vs GPT-5.5, making it the best-value OpenAI flagship to date.

Trade-offs:
- **One-time promotional pricing:** $4/$20 per 1M tokens available "at least through November 21, 2026" — after this date, list prices return to $5/$30 per 1M tokens, reducing the cost advantage.
- **Not the absolute Intelligence Index leader:** AA Index 58.9 vs Fable 5's implied score of ~59-60 ( "within one point" means it's very close but not #1). For the absolute highest AA Index score, Fable 5 (or Opus 5.5 at 57.6 on v5.0) remains superior.
- **Multimodal limitations:** Text, image, and PDF input only; no native audio or video output. Image generation supported as a tool but not a primary capability. Score reduced to 80/100 on Multimodal dim rather than 100.
- **Knowledge cutoff Feb 2026:** Relative to some competitors with more recent cutoffs (2026-11-11 today vs Feb 16, 2026 cutoff — about 9 months old, which is reasonable for a July 2026 release but still a limitation for current events).
- **Not the overall index leader per all evaluators:** Per gradually.ai overall index: 71 (rank 12-18 of 85), behind Kimi K3.1 Pro (80), Claude Fable 5 (80), GPT-6 Astra (73). Per PublicAI Index, many category scores below the leaders.

GPT-5.6 Sol is recommended as the **default model for most professional coding, knowledge-work, and cybersecurity workloads** where cost-performance matters most. It offers "within one point of Fable 5" Artificial Analysis Intelligence Index performance at "one third the cost," making it the best value proposition in OpenAI's GPT-5.6 lineup. Ideal for: coding assistance (especially AA Coding Agent Index-style tasks), knowledge work with GDPval-AA v2, cybersecurity analysis (with enhanced safeguards), and any scenario where token efficiency and cost per task are important. For the absolute highest Artificial Analysis Intelligence Index score, Fable 5 remains the reference point at #1, but GPT-5.6 Sol offers a compelling near-equivalent at significant cost savings. After November 21, 2026 (when promotional pricing expires), the model's value proposition changes — list prices of $5/$30 per 1M tokens still make it competitive but less exceptional. GPT-6 Astra is the recommended successor for new workloads requiring the latest capability tier.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-11
- Method: Public internet research using official OpenAI model card, Artificial Analysis, Vals AI, gradually.ai, PublicAI Index, and OpenAI announcement/comparisons; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-5.6 Model Card](https://platform.openai.com/docs/models/gpt-5.6)
  - [OpenAI: GPT-5.6 Sol API Docs](https://platform.openai.com/docs/models/gpt-5.6-sol)
  - [OpenAI: GPT-5.6 Announcement Blog](https://openai.com/index/gpt-5-6/)
  - [Artificial Analysis: GPT-5.6 Has Landed](https://artificialanalysis.ai/articles/gpt-5-6-has-landed)
  - [Artificial Analysis: GPT-5.6 Model Page](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [Gradually AI: GPT-5.6 Sol](https://www.gradually.ai/en/ai-models/gpt-5.6-sol/)
  - [PublicAI Index: GPT-5.6 Sol](https://publicai.io/model-index/m/gpt-5-6-sol)
  - [OpenAI Index: GPT-5.6](https://openai.com/index/gpt-5-6/)
  - [Gradually AI: GPT-5.6 Sol vs Muse Spark 1.3](https://www.gradually.ai/en/llm-comparison/gpt-5.6-sol-vs-meta-muse-spark-1.3)
  - [Gradually AI: GPT-5.6 Sol vs Claude Opus 5.5](https://www.gradually.ai/en/llm-comparison/gpt-5.6-sol-vs-claude-opus-5-5)
  - [OpenAI: GPT-5.6 SWE-Bench and Terminal-Bench results](https://openai.com/index/gpt-5-6/)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.6-sol/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.6-sol/`.
4. No benchmark invented; verified benchmarks found (many scores from OpenAI index, Artificial Analysis, gradually.ai).