# GPT 5.4 Pro — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5.4-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-compute tier of the GPT-5.4 generation, for maximum performance on the most complex professional and reasoning tasks. A paid-only API/ChatGPT variant of GPT-5.4.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-pro`; OpenAI API `gpt-5.4-pro` (Responses API). ChatGPT Pro/Enterprise.
- **Release / knowledge:** 2026-03-05 (OpenAI "Introducing GPT-5.4"). Knowledge cutoff August 31, 2025.
- **IDs:** `opencode/gpt-5.4-pro` (paid tier; no Free ID on Zen)
- **Context window:** 1M tokens (Artificial Analysis lists 1M / 1.1M in FAQ).
- **Modalities:** text + image input; text output. Reasoning: yes (xhigh). Tool calls, tool search, computer use.
- **Pricing (as of 2026-03-05):** API $30 per 1M input / $180 per 1M output. Paid only.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> GPT-5.4 Pro column from the OpenAI announcement; rows OpenAI left blank for Pro are marked "not reported for Pro" rather than inferred.

Agent / tool use:

- BrowseComp: **89.3%** (state of the art at release; base GPT-5.4: 82.7%)
- GDPval (wins or ties): **82.0%** (base 83.0%)
- FinanceAgent v1.1: **61.5%**
- Investment Banking Modeling Tasks (Internal): **83.6%**
- OfficeQA: **not reported for Pro** (base 68.1%)
- MCP Atlas / Toolathlon / Tau2-bench / MCP-Atlas-AA / GDPval-AA Elo / Claw-Eval: **not reported for Pro**

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (base 92.8%)
- HLE, no tools: **42.7%**; HLE, with tools: **58.7%**
- FrontierMath Tier 1–3: **50.0%**; Tier 4: **38.0%**
- Frontier Science Research: **36.7%**
- ARC-AGI-1 (Verified): **94.5%**; ARC-AGI-2 (Verified): **83.3%**
- Artificial Analysis Intelligence Index: **not publicly available** (AA page shows N/A)
- Omniscience Accuracy / Hallucination Rate: no Pro-specific public score found (base GPT-5.4 claims 18% fewer error-containing responses vs GPT-5.2)

Coding:

- SWE-Bench Pro / Terminal-Bench 2.0: **not reported for Pro** (base GPT-5.4: 57.7% / 75.1%; GPT-5.3-Codex: 56.8% / 77.3%)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No Pro-specific MRCR/GraphWalks rows; base GPT-5.4: MRCRv2 8-needle 128K–256K 79.3%, 512K–1M 36.6%; GraphWalks BFS 256K–1M 21.4%.

Vision:

- MMMU-Pro: **not reported for Pro** (base GPT-5.4: 81.2% no tools / 82.1% with tools; original-detail input up to 10.24M pixels).

### Normalized scores (1–100)

- **Tool use: 85/100.** BrowseComp 89.3% is SOTA and confirms top-tier web/agent research; but Pro lacks published MCP-Atlas/Toolathlon/Tau2 rows, capping confidence.
- **Reasoning: 87/100.** GPQA 94.4%, HLE 58.7% with tools and ARC-AGI-2 83.3% are elite; FrontierMath Tier 4 (38.0%) is the main limiter.
- **Context window: 89/100.** 1M-token window on the general GPT-5.4 platform with dense-document support; no Pro-specific long-context retrieval measurement.
- **Multimodal: 74/100.** Text + image input, text output; full-fidelity `original` detail up to 10.24M pixels, but no audio/video generation and no Pro-specific MMMU-Pro.
- **Coding: 82/100.** Inherits the GPT-5.4/GPT-5.3-Codex coding line (SWE-Bench Pro ~57%, Terminal-Bench 2.0 ~75-77%); Pro itself publishes no coding rows.
- **Cost efficiency: 38/100.** $30/$180 per 1M is a steep premium tier aimed at accuracy-critical work; token-efficiency gains partly offset it.
- **Overall Score: 83.0/100.** Half-up mean of the five quality dims (85+87+89+74+80)/5 = 83.0. Best-fit recommendation: hardest research, math, and knowledge-work queries where maximum accuracy justifies the premium.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (OpenAI "Introducing GPT-5.4" announcement 2026-03-05 and the Artificial Analysis GPT-5.4 Pro model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
