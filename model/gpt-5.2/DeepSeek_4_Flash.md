# GPT 5.2 — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Thinking — API id `gpt-5.2`)
- **Short description:** OpenAI's December-2025 frontier model for professional knowledge work, long-running agents, and coding. The folder tracks the Thinking tier; GPT-5.2 Pro (`gpt-5.2-pro`) is a higher-compute sibling whose extra benchmark columns are noted below.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.2`; OpenAI API `gpt-5.2` (Responses + Chat Completions); ChatGPT as GPT-5.2 Thinking. `gpt-5.2-chat-latest` is the Instant variant.
- **Release / knowledge:** 2025-12-11 (OpenAI "Introducing GPT-5.2"). Knowledge cutoff August 31, 2025.
- **IDs:** `opencode/gpt-5.2` (paid tier; no Free ID on Zen)
- **Context window:** 400K total (Artificial Analysis lists 400k; OpenAI describes a `/compact` endpoint that extends effective context for long agentic runs).
- **Modalities:** text and image input; text output. Reasoning: yes (supports the fifth `xhigh` effort tier). Tool calls, Python, and search tools supported.
- **Pricing (as of 2025-12-11):** `gpt-5.2` $1.75 per 1M input / $14 per 1M output (90% cached-input discount); `gpt-5.2-pro` $21 / $168. Paid only.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> GPT-5.2 Thinking values from the OpenAI announcement appendix unless the Pro column is named; Pro-only cells are labelled.

Agent / tool use:

- Tau2-bench Telecom: **98.7%** (OpenAI); Tau2-bench Retail: **82.0%**
- Scale MCP-Atlas: **60.6%**
- Toolathlon: **46.3%**
- BrowseComp: **65.8%** (Pro: 77.9%)
- BrowseComp Long Context 128k: **92.0%**; 256k: **89.8%**
- GDPval (wins or ties): **70.9%** (Pro: 74.1%); investment-banking spreadsheet tasks: **68.4%** (Pro: 71.7%)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA Elo / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Pro: 93.2%)
- HLE (no tools): **34.5%** (Pro: 36.6%); HLE (w/ search + Python): **45.5%** (Pro: 50.0%)
- FrontierMath Tier 1–3 (w/ Python): **40.3%**; Tier 4: **14.6%**
- AIME 2025 (no tools): **100.0%**; HMMT Feb 2025: **99.4%**
- ARC-AGI-1 Verified: **86.2%** (Pro: 90.5%); ARC-AGI-2 Verified: **52.9%** (Pro: 54.2%)
- Artificial Analysis Intelligence Index: **30** (#89 / 224, estimate as of the AA page)
- Omniscience Accuracy / Hallucination Rate: **not publicly available** on the AA page; OpenAI reports 30% relative fewer error-containing responses vs GPT-5.1 Thinking (no absolute rate)

Coding:

- SWE-Bench Pro, Public: **55.6%**
- SWE-bench Verified: **80.0%**
- SWE-Lancer IC Diamond: **74.6%**
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- OpenAI MRCRv2 8-needle 128k–256k: **77.0%** (4k–8k: 98.2%; 64k–128k: 85.6%)
- GraphWalks BFS <128k: **94.0%**; GraphWalks parents <128k: **89.0%**

### Normalized scores (1–100)

- **Tool use: 90/100.** Tau2-Telecom 98.7% and MCP-Atlas 60.6% are strong, and BrowseComp 65.8% (77.9% Pro) is solid; capped by middling Toolathlon 46.3% versus newer frontier agents.
- **Reasoning: 90/100.** GPQA 92.4%, HLE 45.5% w/ tools, AIME/HMMT near-perfect and ARC-AGI-2 52.9% are frontier-2025 class; lower FrontierMath T4 (14.6%) and HLE keep it below the GPT-5.5 tier.
- **Context window: 84/100.** 400K verified window with SOTA MRCRv2 retrieval (77.0% at 128k–256k) and near-perfect short/medium retrieval; the `/compact` extension helps long runs but the base window is mid-range for 2026.
- **Multimodal: 76/100.** Text + image input, text output only; CharXiv 88.7% w/ Python and ScreenSpot-Pro 86.3% make vision-in strong, but no audio/video generation.
- **Coding: 90/100.** SWE-Bench Pro 55.6% and SWE-bench Verified 80.0% are SOTA for its release window and testers rate it a major agentic-coding leap; no published LiveCodeBench/SciCode to push higher.
- **Cost efficiency: 70/100.** $1.75/$14 per 1M with a 90% cache discount is reasonable for frontier-class work and token-efficiency offsets the rate; still a paid premium tier.
- **Overall Score: 86.0/100.** Half-up mean of the five quality dims (90+90+84+76+90)/5 = 86.0. Best-fit recommendation: production agentic coding and long-document professional work at a mid-frontier price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (OpenAI "Introducing GPT-5.2" announcement 2025-12-11 and the Artificial Analysis GPT-5.2 model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
