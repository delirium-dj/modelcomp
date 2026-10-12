# GLM 5.1 Coding — findings by Qwen 3.8 27B

- Source: Z.ai (`opencode/glm-5.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.ai's open-weights (MIT) flagship MoE for agentic engineering and long-horizon autonomous coding; strong SWE-Pro/Tau3 numbers; requested as "Free" but no Zen Free ID exists — scored on paid pricing.
- **Provider / access:** Z.ai API (`glm-5.1`); OpenCode Zen paid `opencode/glm-5.1` (no Free ID found on Zen, 2026-09-17 check per meta.json); self-host (754B/40B-class open weights, Claude Code/OpenClaw integration).
- **Release / knowledge:** GLM-5 family (Z.ai blog; technical report arXiv:2602.15763); knowledge cutoff not separately documented in retrieved sources.
- **IDs:** `glm-5.1` (paid; no `glm-5.1-*-free` on Zen — see meta.json).
- **Context window:** 203K (BenchLM); 128K max output (meta.json: 200–205K / 128K out).
- **Modalities:** text in/out; reasoning yes; tool calls yes (MCP-Atlas, Claw-Eval, Toolathon evidence); image input not verified.
- **Pricing (as of 2026-09-29):** paid $1.40/$4.40 per 1M on Zen (meta.json); cached input ~$0.26; no Free ID.
- **Architecture:** open-weights MoE (glm_moe_dsa family), MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **63.5%** (BenchLM glm-5-1; TB2.1 Vals 56.9%)
- Tau3-bench: **70.6%** (BenchLM); Tau2-bench: **97.7%** (BenchLM)
- GDPval-AA: **1181** Elo (BenchLM)
- Claw-Eval: **62.3%** (BenchLM); MCP Atlas: **71.8%** (BenchLM); CyberGym: **68.7%** (BenchLM)
- BrowseComp: **68%** (BenchLM)

Reasoning / knowledge:

- GPQA-Diamond: **86.2%** (BenchLM glm-5-1; Vals 84.5%)
- HLE: **52.3%** (BenchLM)
- AA-LCR: **73.7%** (BenchLM); CritPt: **4.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **26.1%** (BenchLM)
- AIME 2026: **95.3%**; MMLU-Pro Vals **86.9%** (BenchLM)

Coding:

- SWE-bench Pro: **58.4%** (BenchLM glm-5-1)
- SWE-bench (Vals): **76.4%**; SWE-Rebench **62.7%** (BenchLM)
- LiveCodeBench (Vals): **81.4%**; Vibe Code Bench **31.46%** (BenchLM)
- AA-SciCode: **44.8%** (BenchLM)
- AA Coding Index: **55.8%** (BenchLM)
- BenchLM overall: **56.93/100**, #54 of 525 (BenchLM, retrieved 2026-09-29)

Long context:

- 203K window (BenchLM); no MRCR/RULER retrieval numbers found for this ID.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau3 70.6% clears the ~50% frontier ref and Claw-Eval 62.3% is solid, but TB2.0 63.5% and GDPval 1181 stay in the mid-to-high range — strong agent model, short of the 90+ tier.
- **Reasoning: 78/100.** GPQA-D 86.2% near the 90% ref, HLE 52.3% clears the 40%+ ref, LCR 73.7%; CritPt 4.6% and Index 26.1% cap it in the high-70s.
- **Context window: 70/100.** 203K ≈ the 200K anchor of the 200K–500K tier (exactly 200K = 70), with 128K max output.
- **Multimodal: 15/100.** Text in/out only.
- **Coding: 75/100.** SWE-Pro 58.4%, SWE Vals 76.4%, LiveCode 81.4%, SciCode 44.8%, Coding Index 55.8 — consistently strong, just under the frontier band.
- **Cost efficiency: 80/100.** Paid $1.40/$4.40 per 1M sits between the ~$1.25/$4.25 anchor (~88) and the $3/$15 anchor (~60); no Free ID.
- **Overall Score: 62.6/100.** Mean of the five quality dims (75+78+70+15+75)/5 = 62.6 — best fit: long-horizon agentic coding on paid pricing; re-score if a $0 promo appears.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (BenchLM glm-5-1, retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
