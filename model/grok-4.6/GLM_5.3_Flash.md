# Grok 4.6 — findings by GLM 5.3 Flash

- Source: xAI / SpaceXAI (`grok-4.6`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (proprietary frontier; no Free-tier wording)
- **Short description:** xAI's August 2026 frontier model, built on Grok 4.5 with a focus on long-running agents and ambitious interactive/visual work — strongest-in-table GDPval-AA and AA-Briefcase scores at launch, trained with agentic RL across kernel optimization, web development and CAD environments. The 2026-10-11 second pass fills the knowledge gaps: GPQA 94.9% (AA) / 94.7% (Vals) — elite — plus ARC-AGI-2 67.1% verified. Superseded by Grok 4.7 (released September 21, 2026; AA 46.3 on v4.3.2 vs 4.6's 44.3, same $2/$6).
- **Provider / access:** xAI API (`grok-4.6`, docs.x.ai/developers/grok-4-6) and xAI Console; also OpenRouter, Vercel, Cloudflare; bundled in Cursor and Grok Build. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released August 12, 2026. Knowledge cutoff February 1, 2026.
- **IDs:** `grok-4.6` (xAI API); fast variant priced 2x.
- **Context window:** 500,000 tokens (BenchLM concurs); no published text-output limit.
- **Modalities:** Text + image in; text out. Function calling, structured outputs, prompt caching, code execution, web search, X search. Reasoning effort: low/medium/high (default)/xhigh. Batch API not supported.
- **Pricing (as of 2026-10-11):** $2.00 in / $6.00 out per 1M; cache reads $0.50 (75% discount); fast variant 2x. AA cost per Intelligence Index task $1.86; blended $1.35/1M.
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Longer supplemental pretraining than 4.5 plus regenerated SFT trajectories and agentic RL (knowledge work, general coding, kernel optimization, web dev, CAD).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1753** (xAI launch table — best in its comparison set) — **conflicts with AA's independent 1643 (normalized 56.1%)**; both listed
- AA-Briefcase: **1577** (xAI table — best in set at publication)
- AA AutomationBench-AA: **66.7%** (AA, independent — corroborates the 67% launch-window read; 2nd to GPT-6 Astra)
- AA Tau3-Banking: **50.7%**; AA EnterpriseOps-Gym: **48.3%**; AA Agentic Index: **53.4%** (AA — fill the Tau3 gap)
- Vals Terminal-Bench 2.1: **78.3%** (Vals, independent — strong)
- APEX-Agents: **57.5%**; APEX-SWE: **56.4%** (xAI table)
- Harvey LAB (Vals): **15.8%** (best in its table); CWE-bench v1: **57.0%** (Collinear)
- Terminal-Bench 3.0: **26.5%** (frontierbench.ai — weak on the harder TB variants); ApprenticeBench (GUI): **13%** (NeoCognition — weak)
- Gray Swan IPI (15 attempts): **51.8%** (competitor-reported — Google's Gemini 4 Argon launch chart; by far the worst prompt-injection resistance measured in this repo — Claude models sit at 1–5%)
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA, independent); Vals: **94.7%** — fills the gap the 2026-10-08 pass marked missing; elite, among the best measured in this repo
- HLE: **42.9%** (AA, independent — fills the HLE gap)
- ARC-AGI-1: **87.0%**; ARC-AGI-2: **67.1%**; ARC-AGI-3: **2.1%** (ARC Prize verified results, arcprize.org/results/xai-grok-4-6 — fills the ARC gap)
- AA-LCR v1.1: **80.3%** (AA — fills the long-context gap); CritPt: **17.1%** (AA — weak)
- Artificial Analysis Intelligence Index: **44.3** (AA current board — corroborates the 44 at high effort; xAI's own-table 61 remains a version discrepancy)
- MMLU-Pro: **89.4%** (Vals, independent)
- AA-Omniscience: **48.2% accuracy / 34.3% non-hallucination row / 30.5 index** (AA)
- Verbosity: 94M output tokens across the AA Index; 59.8 tok/s; TTFT 41.52s

Coding:

- SWE-bench (Vals): **95.6%** (Vals, independent — fills the gap, strong); LiveCodeBench (Vals): **88.2%** (fills the gap)
- AA Coding Index: **76.8%** (AA); AA-SciCode: **56.5%** (AA); VulcanBench v3: **87.0%** (VulcanBench)
- CursorBench 3.2: **70.8%** (Cursor — corroborates the 69.9 vendor read); CursorBench 4.0 (xhigh): **41.4** ($6.10/task)
- FrontierSWE v2: **25.3%** (Proximal — weak); FrontierCode 1.1 Extended: **61.3%** (xAI); DeepSWE v1.1: **65.9%** (xAI)
- SWE-bench Verified / Pro: no verified public score found

Long context:

- 500K window; AA-LCR 80.3% is the first measured long-context number (solid)
- MRCR/RULER: no retrieval numbers published

### Normalized scores (1–100)

- **Tool use: 87/100.** Vals TB2.1 78.3% is the strongest independent corroboration yet, AA AutomationBench 66.7% holds #2-class, and Tau3 50.7% fills a gap — but the GDPval conflict (1753 vendor vs 1643 AA), TB3.0 26.5%, ApprenticeBench 13% and the alarming 51.8% injection-ASR keep the score where it was.
- **Reasoning: 84/100.** (Was 78 on the prior pass.) The largest correction of this pass: GPQA 94.9%/94.7% (two independent sources) is elite-class, ARC-AGI-2 67.1% is verified, AA-HLE 42.9% clears the 40% bar and MMLU-Pro 89.4% corroborates — held out of the high 80s by AA Index 44.3, CritPt 17.1% and the ARC-2 gap to the Claude/OpenAI 2026 class.
- **Context window: 86/100.** 500K puts it at the floor of the 500K–1M band (85–94); AA-LCR 80.3% is the first measured retrieval-adjacent evidence (solid); no output cap published.
- **Multimodal: 65/100.** Text+image in / text out — middle of the 60–70 image-in band; visual-project strength remains qualitative.
- **Coding: 83/100.** (Was 80 on the prior pass.) Vals SWE-bench 95.6% and LiveCodeBench 88.2% fill the gaps with independent evidence, AA Coding Index 76.8% is frontier-adjacent and CursorBench corroborates — FrontierSWE v2 25.3% and DeepSWE 65.9% cap it below the Sol/Fable band.
- **Cost efficiency: 74/100.** $2/$6 matches the Qwen3.8-Max anchor; 75% cache discount helps, but $6.10 per Cursor task at xhigh and the 2x fast variant don't. No free tier, no Batch API.
- **Overall Score: 81.0/100.** (Was 79.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (87 + 84 + 86 + 65 + 83) / 5 = 405/5 = 81.0 — raised on the 2026-10-11 second pass as the GPQA/ARC/Vals rows convert the reasoning and coding gaps into elite measured evidence. Best fit: long-running agentic and knowledge-work projects (GDPval/Briefcase class) at mid-tier prices — not the pick for frontier coding depth (Sol/Fable), million-token contexts, or injection-sensitive deployments.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the xAI Grok 4.6 launch post + docs, Artificial Analysis model benchmarks, Vals AI leaderboards, ARC Prize verified results, Cursor/Proximal/Collinear/NeoCognition via benchlm.ai, plus the prior 2026-10-08 pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
