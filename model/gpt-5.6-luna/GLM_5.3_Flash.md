# GPT-5.6 Luna — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (cost-sensitive high-volume tier; no Free-tier wording)
- **Short description:** The nano-tier model of OpenAI's GPT-5.6 family (Sol / Terra / Luna lineup) — fast, low-cost workhorse for summarization, drafting, autocomplete and routine automation, with the full 1.05M context window and OpenAI's complete tool suite at $0.20/$1.20 per 1M. The 2026-10-11 second pass transforms the picture: GPQA 92.3%, FrontierMath T4 58.5%, AA-LCR 83.7% and TB2.1 84.7% — far above the nano-tier expectations. BenchLM ranks it #31 of 889 (66.15). Successor GPT-6 Luna released September 22, 2026.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`), ChatGPT, Codex; also OpenRouter and 15+ routers/gateways. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Generally available July 9, 2026 across ChatGPT, Codex and the API. Knowledge cutoff February 16, 2026.
- **IDs:** `gpt-5.6-luna` (snapshots/aliases under the same ID). Siblings: `gpt-5.6-sol` (flagship), `gpt-5.6-terra`.
- **Context window:** 1,050,000 tokens (BenchLM concurs 1.05M) / 128,000 max output — verified on the OpenAI API model page. >272K input prompts bill at 2x input / 1.5x output for the full request; cache writes at 1.25x input rate.
- **Modalities:** Text + image in; text out. Audio/video not supported. Reasoning: yes — effort none/low/medium (default)/high/xhigh/max. Tools: web search, file search, code interpreter, hosted shell, computer use, MCP, tool search, skills.
- **Pricing (as of 2026-10-11):** $0.20 in / $1.20 out per 1M; cached input $0.02 (90% discount); Batch 50%. AA measures $0.18 per Intelligence Index task; blended $0.17/1M.
- **Architecture:** Proprietary, closed weights; parameters undisclosed (nano tier of the family).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI GPT-5.6 launch table via benchlm.ai, updated 2026-10-10 — fills the gap); Vals independent: **79.0%**
- GDPval-AA: **1582** (OpenAI launch table — fills the gap); AA-normalized: **48.2%**
- BrowseComp: **83.3%**; CyberGym: **77.9%**; OSWorld 2.0: **45.6%**; Toolathlon: **53.4%**; ExploitGym: **12.4%** (OpenAI)
- AA Agentic Index: **42.7%**; APEX-Agents-AA: **35.8%** (AA); ApprenticeBench (GUI): **7%** (NeoCognition — weak); Terminal-Bench 3.0: **14.3%** (weak)
- CursorBench 4.0 (max): **35.9** ($1.03/task); CursorBench 3.2: **61.1** (Cursor — the 2026-10-08 "47.7 medium" was a lower-effort run)
- Tau / Claw-Eval: no individual public rows surfaced for Luna

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI launch table — fills the gap); AA independent: **91.1%**; Vals: **91.7%** — three-source elite-class agreement
- ARC-AGI-2: **59.5%** (ARC Prize verified, GPT-5.6); ARC-AGI-1: **88.0%** (Luna Max verified); ARC-AGI-3: **0.2%**
- FrontierMath v2: **78.6%** Tiers 1–3 / **58.5%** Tier 4 (OpenAI — strong for the tier)
- AA-LCR v1.1: **83.7%** (AA — fills the long-context gap; excellent)
- AA-HLE: **39.5%** (AA — fills the HLE gap, just under the 40% bar); CritPt: **20.6%** (AA)
- Artificial Analysis Intelligence Index: **37 at max** (AA direct, #4/176 in class) — **OpenAI's launch table cites 51.2** (via benchlm.ai); effort/version discrepancy flagged, both listed
- MMLU-Pro: **86.0%** (Vals); HealthBench Professional: **55.7%**; HealthBench Hard: **32.0%** (system card)
- AA-Omniscience: **42.7% accuracy / 92.6% non-hallucination row / −10.3 index** (AA)
- Verbosity: 150M output tokens across the AA Index; 161.8 tok/s (notably fast); TTFT 123.28s at max effort

Coding:

- SWE-bench Pro: **62.7%** (OpenAI launch table — fills the gap); DeepSWE: **67.2%** (fills the gap)
- SWE-bench (Vals): **93.0%** (Vals, independent — strong)
- AA Coding Index: **71.5%** (AA); AA-SciCode: **53.6%** (AA); VulcanBench v3: **85.5%**
- FrontierCode 1.1 Extended: **55.1%** (Cognition/Devin); CursorBench 4.0: **35.9** / 3.2: **61.1** (Cursor)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found for Luna specifically

Long context:

- 1.05M window with >272K surcharge; AA-LCR 83.7% is the first measured long-context number (excellent)
- MRCR/RULER: no published retrieval numbers

Multimodal:

- MMMU-Pro: **78.4%** / **79.5%** with Python (OpenAI); AA-MMMU-Pro: **78.6%** (AA) — measured vision backs the image-input claim

### Normalized scores (1–100)

- **Tool use: 75/100.** (Was 62 on the prior pass.) The launch table + Vals fill the prior single-source gap: TB2.1 84.7/79.0, GDPval 1582 (48.2% normalized), BrowseComp 83.3% and CyberGym 77.9% on top of the full OpenAI tool suite; Toolathlon 53.4%, ApprenticeBench 7% and TB3.0 14.3% keep it out of the frontier band.
- **Reasoning: 80/100.** (Was 66 on the prior pass.) The largest correction of this pass: GPQA 91.1–92.3% (three sources), FrontierMath T4 58.5%, ARC-AGI-2 59.5% verified and AA-LCR 83.7% are far beyond the "AA Index 37" framing — held under 85 by AA-HLE 39.5%, the 37-vs-51.2 index discrepancy and CritPt 20.6%.
- **Context window: 92/100.** 1.05M window (95–100 tier) with 128K output; AA-LCR 83.7% is strong measured evidence; docked for the >272K surcharge.
- **Multimodal: 65/100.** Text+image in / text out with measured MMMU-Pro 78.4–78.6% — top of the 60–70 image-in band; no audio/video.
- **Coding: 74/100.** (Was 58 on the prior pass.) Vals SWE-bench 93.0%, SWE Pro 62.7%, DeepSWE 67.2%, AA Coding Index 71.5% and TB2.1 84.7% fill the prior evidence vacuum — genuinely strong nano-tier coding; SWE-bench Verified/LiveCodeBench remain unpublished and CursorBench 4.0 35.9 caps it below 80.
- **Cost efficiency: 93/100.** $0.20/$1.20 with $0.02 cached input sits just under the ~$0.10/$0.20→97–99 anchor; $0.18/task (AA) and a ~5x price cut since July make it an exceptional value — docked a few points for max-effort verbosity (150M tokens) and the 123s TTFT at max.
- **Overall Score: 77.2/100.** (Was 68.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (75 + 80 + 92 + 65 + 74) / 5 = 386/5 = 77.2 — raised materially on the 2026-10-11 second pass: the GPT-5.6 launch table and AA/ARC/Vals boards convert nearly every prior gap into measured evidence. Best fit: high-volume, cost-sensitive production work that still needs a 1M window, image input and surprisingly strong reasoning/coding — escalate to Sol/Terra or Astra only for frontier-depth work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing OpenAI's GPT-5.6 launch table + system card, Artificial Analysis model benchmarks, Vals AI leaderboards, ARC Prize verified results, Cursor/Cognition/NeoCognition via benchlm.ai, plus the prior 2026-10-08 pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
