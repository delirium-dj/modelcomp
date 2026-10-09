# Muse Spark 1.1 — findings by GLM 5.3 Flash

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model built for agentic tasks — the second ground-up post-Llama model; leads the field on tool use/MCP integration, with free consumer access in the Meta AI app. Closed-weight and proprietary (a reversal of Meta's Llama-era open-weights strategy).
- **Provider / access:** Meta Model API (`muse-spark-1.1`, public preview US-only, wire-compatible with OpenAI and Anthropic SDKs — Chat Completions and Responses-style); consumers free in the Meta AI app (Thinking mode); $20 free credits for new accounts; enterprises via early partner program. No Free ID on OpenCode Zen. No EU access at launch.
- **Release / knowledge:** Released 2026-07-09 (same day as GPT-5.6); knowledge cutoff not verified.
- **IDs:** `muse-spark-1.1` (Meta Model API). No Free ID on Zen.
- **Context window:** 1,000,000 tokens total (1,048,576 in API docs, verified via OpenRouter/lmmarketcap and Meta API docs) with active context management that compacts long sessions automatically.
- **Modalities:** text, image, video, audio and PDF input; text-only output; reasoning yes (Thinking mode); tool calls with zero-shot MCP generalization and parallel subagent orchestration; computer use as a first-class capability; structured output/JSON mode; built-in web search; Files API; prompt caching.
- **Pricing (as of 2026-10-09):** $1.25 / $4.25 per 1M in/out (undercuts comparable frontier models on output price); consumer free in the Meta AI app — free tier uses may carry data-usage caveats typical of Meta's consumer products.
- **Architecture:** Proprietary, closed-weight — parameter count not disclosed; succeeds the Llama line as Meta's production API offering.

### Raw benchmarks found

> Meta AI Muse Spark 1.1 evaluation report via benchlm.ai (updated 2026-10-09) + Artificial Analysis and Vals AI rows. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Meta 1.1 evaluation report — fills the previously-missing TB row); Vals harness: **69.3%**
- MCP Atlas: **88.1%** (Meta evaluation report; vs Opus 4.8's 82.2 and GPT-5.5's 75.3 — leads the field)
- Toolathlon: **75.6%** (Meta evaluation report — new)
- OSWorld-Verified: **80.8%** (Meta evaluation report — new; distinct from OSWorld 2.0 below); OSWorld 2.0: **14.2%** (hard computer use unsolved, trails Opus 4.8)
- WebArena-Verified: **69%** (Meta evaluation report — new)
- GDPval-AA: **1375 Elo** (Meta evaluation report — fills the previously-missing GDPval row); AA-normalized: **35.7%** (Artificial Analysis)
- Cybench: **92.9%**; CyberGym: **59.0%**; JobBench: **54.7%**; Finance Agent v2: **57.2%**; ExploitGym: **0.8%** (Meta evaluation report)
- AA Agentic Index: **27.5%** (Artificial Analysis via benchlm.ai)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- HLE: **62.1% with tools** (Meta evaluation report — fills the previously-missing HLE; well above AA's 46.2%); HLE w/o tools: **52.2%**
- AA-GPQA Diamond: **89.8%** (AA, corroborated); GPQA Diamond (Vals): **91.2%**
- AA-LCR: **77.7%** (AA long-context-reasoning board — fills the previously-missing LCR)
- CritPt: **15.1%** (AA — new)
- MRCR at 1M window: **54.1%** (Meta evaluation report; trails GPT-5.5's 74.0)
- Artificial Analysis Intelligence Index: **33.7** (AA via benchlm.ai — current reading; the earlier "53.2 / #23 of 68" was a launch-era snapshot predating the index recalibration)
- AA-Omniscience: Index 28.1, accuracy **52.1%**, hallucination rate **50.0%** (benchlm.ai)
- MMLU-Pro (Vals): **88.7%** (benchlm.ai)
- HealthBench Professional: **59.3%** (carried from 1.0; still leads Opus 4.8)

Coding:

- SWE-bench (Vals): **82.0%** (fills the previously-missing SWE-V proxy row)
- LiveCodeBench (Vals): **85.9%** (fills the previously-missing LCB row)
- SWE-bench Pro: **61.5%** (Meta evaluation report — fills the previously-missing SWE-Pro row)
- AA-SciCode: **58.8%** (Artificial Analysis — fills the previously-missing SciCode; clears the 55%+ frontier mark)
- AA Coding Index: **71.3%** (Artificial Analysis)
- Terminal-Bench 2.1 (coding harness): **80.0%** (see above)
- DeepSWE: **53.3%** (Meta evaluation report; vs GPT-5.5's 67.0 — below the 74%+ frontier threshold)
- Atomic coding suite (Meta internal): **67.0%** pass@1 / **82.5%** pass@20 (up from 48.1%/65.0% for 1.0)

Long context:

- MRCR **54.1%** at the 1M window; AA-LCR **77.7%** measured (new); retrieval solid to ~400K tokens in hands-on testing, vaguer beyond; active context compaction can silently drop early constraints (buildfastwithai hands-on)

Multimodal / vision:

- CharXiv: **88.4%** (Meta evaluation report); BabyVision: **76.3%**; Design Arena Website: **1275** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** MCP Atlas 88.1% leads the entire field (Opus 4.8 82.2, GPT-5.5 75.3), with the filled TB2.1 80.0%, OSWorld-Verified 80.8%, Toolathlon 75.6% and Cybench 92.9% clearing the frontier references; the very low 14.2% OSWorld 2.0 (hard computer use), 0.8% ExploitGym and AA Agentic Index 27.5% cap it below 95.
- **Reasoning: 88/100.** HLE 52.2% no-tools / 62.1% with-tools (filled — far above the AA-only reading) and GPQA 89.8–91.2% clear the frontier references; AA-LCR 77.7% supports; AA Intelligence Index 33.7 (current recalibrated reading, down from the launch-era 53.2) and CritPt 15.1% cap it below 90.
- **Context window: 92/100.** 1M total tokens (≥1M tier) with measured MRCR 54.1% at 1M and AA-LCR 77.7% — retrieval below frontier-grade at the far end, docking it below 95.
- **Multimodal: 95/100.** Text, image, video, audio and PDF input through one API — production-ready audio input and Files API push it to the top of the 90–100 band; text-only output is the only gap.
- **Coding: 85/100.** Now with filled rows: SWE-bench (Vals) 82.0%, LiveCodeBench 85.9%, AA-SciCode 58.8% (clears the 55%+ mark), SWE-Pro 61.5%; DeepSWE 53.3% trails the frontier threshold — mid-frontier.
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M (AA blended $2.00) sits exactly at the ~$1.25/$4.25 = ~88 methodology reference; $20 free credits help evaluation but the API is a paid preview.
- **Overall Score: 90/100.** Mean of the five quality dims (90 + 88 + 92 + 95 + 85) / 5 = 90.0. Best-fit: tool-heavy agent stacks, MCP-based workflows and multimodal (especially audio) ingestion where cost per output token and tool reliability matter most.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables citing the Meta Muse Spark 1.1 evaluation report, Artificial Analysis, Vals AI, updated 2026-10-09; launch coverage via buildfastwithai, aiapiindex.com); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing TB2.1 80.0%, SWE-Pro 61.5%, LCB 85.9%, AA-SciCode 58.8%, GDPval-AA 1375, HLE 52.2/62.1%, AA-LCR 77.7%, OSWorld-Verified 80.8%, Toolathlon 75.6%; updates AA Index 53.2→33.7 — Tool 92→90, Reasoning 87→88, Context 90→92, Coding 80→85, Overall 89→90.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.2.md`, using the same headings.
