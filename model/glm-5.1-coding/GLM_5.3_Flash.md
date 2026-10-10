# GLM 5.1 Coding — findings by GLM 5.3 Flash

- Source: Z.AI (`glm-5.1`, proprietary/paid on Zen; open-weights elsewhere)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 (marketed on this repo's compare list as "GLM 5.1 Coding" — Z.AI's flagship long-horizon agentic model; no Zen Free ID exists)
- **Short description:** Z.AI's April 2026 flagship: a 754B-param sparse MoE (~40B active) built for 8-hour autonomous engineering loops — plan, execute, test, refine. SOTA SWE-Bench Pro 58.4 at release, beating Claude Opus 4.6 (57.3) and GPT-5.4 (57.7). Open weights (MIT) but no free API tier.
- **Provider / access:** Z.AI API (`glm-5.1`, `https://api.z.ai/api/paas/v4/`, Chat Completions-compatible); OpenCode Zen lists the paid `opencode/glm-5.1` (no `*-free` ID found). Open weights on Hugging Face (`zai-org/GLM-5.1`, MIT) — self-hostable. Multiple gateway routes (Alibaba, DeepInfra, Novita, TensorX, Nebius, Baidu, DigitalOcean).
- **Release / knowledge:** released 2026-04-07 (opper release tracker; 6 days after GLM-5V-Turbo). Knowledge cutoff not verified in this pass.
- **IDs:** `glm-5.1` (Z.AI) / `opencode/glm-5.1` (Zen, paid). **No Free ID** — scored on paid pricing.
- **Context window:** 200K–203K input (Z.AI docs: 200K; opper: 202,752; benchlm 203K) / 128K max output. Longest output cap measured in this repo.
- **Modalities:** text in / text out only. Thinking modes (multiple), streaming-during-tool-execution, function calling, context caching, structured output (JSON), MCP integration.
- **Pricing (as of 2026-10-09):** Z.AI route $1.40 in / $4.40 out per 1M (cache read $0.26); cheaper third-party routes exist (Alibaba $0.89/$3.58, DeepInfra $1.05/$3.50 — opper route table). No free tier; open weights are the cost escape hatch.
- **Architecture:** sparse MoE, 754B total / ~40B active (opper; HF card), MIT license, commercially usable.

### Raw benchmarks found

> Z.AI GLM-5.1 blog + HF model card via benchlm.ai (updated 2026-10-10) + AA and Vals rows. Previously-missing rows now measured.

Agent / tool use:

- MCP Atlas: **71.8%** (Z.AI blog — fills the previously-missing MCP row)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard via benchlm.ai — fills the previously-missing Claw row)
- GDPval-AA: **1181 Elo** / 31.0% (AA — fills the previously-missing GDPval row)
- Tau2-bench: **97.7%** (AA — corroborates the earlier 98 reading); Tau3: **70.6%** (Z.AI blog — corroborated)
- Terminal-Bench 2.0: **63.5%** (Z.AI blog — corroborated); TB2.1 (Vals): **56.9%**; BrowseComp: **68%** (Z.AI blog)
- CyberGym: **68.7%**; Gert Labs: **60.11%**; ResearchClawBench: **18.2%**; AA Agentic Index: **25.2%** (benchlm.ai)
- SWE-Bench Pro: **58.4%** (Z.AI blog — corroborated; SOTA at release)
- HLE w/ tools: **52.3%** (HF model card — fills the missing tool-augmented row)
- Terminal-Bench Hard: **43%** (AA via opper — corroborated)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Z.AI blog; AA 86.8%, Vals 84.5% — three-source agreement)
- HLE: **31%** (HF model card — corroborates the earlier 30; under the 40% bar); AA-HLE 30.1%
- AIME26: **95.3%**; HMMT Nov 2025: **94.0%**; HMMT Feb 2026: **82.6%** (Z.AI blog — new math rows)
- AA-LCR: **73.7%** (AA — fills the previously-missing LCR; corroborates the earlier 74% long-context reading); CritPt: **4.6%** (AA — fills)
- Artificial Analysis Intelligence Index: **26.1** (AA — corroborates the earlier 26.4)
- AA-Omniscience: Index 0.9, accuracy **23.7%**, hallucination rate **29.9%** (benchlm.ai — good honesty)
- MMLU-Pro (Vals): **86.9%**; AA-IFBench: **76.3%** (corroborates); FrontierMath v2: T1–3 33.4%, T4 12.5% (Epoch — new)

Coding:

- SWE-bench (Vals): **76.4%** (Vals AI — fills the previously-missing independent SWE row)
- LiveCodeBench (Vals): **81.4%** (fills the previously-missing LCB row)
- Vibe Code Bench: **31.5%** (Vals v1.1 — fills; weak); SWE-Rebench: **62.7%** (fills); NL2Repo: **42.7%**; OpenHarmony Bench: **52.3%** (benchlm.ai)
- AA-SciCode: **44.8%** (AA — corroborates the earlier 45; below the 55%+ frontier mark)
- AA Coding Index: **55.8%** (AA — corroborated)
- SWE-bench Verified: no verified public score found for `glm-5.1` itself

Long context:

- AA-LCR **73.7%** measured (fills the previously-missing independent row); window 200K–203K / 128K out

Multimodal / vision:

- Design Arena Website: **1290** (OpenRouter); text-only in and out (Z.AI docs)

### Normalized scores (1–100)

- **Tool use: 85/100.** Tau2 97.7% (elite), the filled MCP Atlas 71.8% and Claw-Eval 62.3%, GDPval-AA 1181 and TB2.0 63.5% clear mid-band anchors; TB2.1 (Vals) 56.9% and AA Agentic Index 25.2% cap it below the 2026 Gemini Flash agentic packages.
- **Reasoning: 78/100.** GPQA 84.5–86.8% (three-source agreement) and AIME26 95.3% (new) are strong; HLE 31% (no tools) stays under the 40% bar, the filled HLE w/tools 52.3% and AA-LCR 73.7% support it; AA Index 26.1 caps it.
- **Context window: 70/100.** 200K–203K at the repo's standard open-model tier with a class-leading 128K output; AA-LCR 73.7% measured; no 1M window.
- **Multimodal: 15/100.** Text-only in and out (Z.AI docs).
- **Coding: 84/100.** SWE-bench (Vals) 76.4% (filled), SWE-Pro 58.4% (release-SOTA, corroborated), LCB (Vals) 81.4% (filled); SciCode 44.8% below the 55%+ mark and Vibe 31.5% cap it below 90.
- **Cost efficiency: 75/100.** $1.40/$4.40 on the Z.AI route with no free ID; third-party routes at $0.89/$3.58 and MIT open weights are the mitigations.
- **Overall Score: 66/100.** Mean of the five quality dims (85 + 78 + 70 + 15 + 84) / 5 = 66.4 → 66. Best fit: top paid open-weights coding/long-horizon pick — text-only and 200K-context are the trade for the SOTA agentic engineering.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-10 citing the Z.AI GLM-5.1 blog, HF model card, AA and Vals boards — official plus two independent harnesses; earlier draft via opper.ai's AA feed); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing MCP Atlas 71.8%, Claw-Eval 62.3%, GDPval-AA 1181, HLE w/tools 52.3%, SWE-bench (Vals) 76.4%, LCB 81.4%, AA-LCR 73.7%, CritPt 4.6%, AIME26 95.3% — Tool 86→85, Reasoning 80→78, Coding 88→84, Overall 69→66 (old draft also showed a six-dim calc).
- Future sources: add a new file next to this one, e.g. `GLM_5.2.md`, using the same headings.
