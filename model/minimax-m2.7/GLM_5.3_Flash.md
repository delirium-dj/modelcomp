# MiniMax M2.7 — findings by GLM 5.3 Flash

- Source: MiniMax (`minimax-m2.7`; no Zen Free ID — scored on paid pricing)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (standard variant; a "highspeed" variant exists)
- **Short description:** MiniMax's March 2026 "self-evolving" 229B MoE: it participated in its own development (100+ autonomous scaffold-optimization rounds, built part of its own research-agent harness) and ships with native **Agent Teams** multi-agent collaboration. Strong productivity automation: 97% skill adherence across 40+ complex skills and multi-turn Excel/PowerPoint/Word editing.
- **Provider / access:** MiniMax API; OpenCode Zen lists paid `opencode/minimax-m2.7` (no `*-free` ID found); gateway routes on opper: DeepInfra, Fireworks, Geodd, Infercom, Morph, Novita, SCX. OpenAI-compatible Chat Completions.
- **Release / knowledge:** released 2026-03-18 (opper: 34 days after M2.5). Knowledge cutoff not verified in this pass.
- **IDs:** `minimax-m2.7` (MiniMax) / `opencode/minimax-m2.7` (Zen, paid). **No Free ID** — scored on paid pricing.
- **Context window:** 197K input (opper; Groq docs 196K, LLMRef 205K; benchlm 200K) / 131K max output.
- **Modalities:** text in / text out. Agent Teams (stable role identity, autonomous decision-making), tool use, structured output, reasoning.
- **Pricing (as of 2026-10-09):** $0.25 in / $1.00 out per 1M (DeepInfra, cache $0.05); list $0.30/$1.20 on Fireworks/Novita/Geodd/Morph. No free tier; no Zen Free ID.
- **Architecture:** 229B sparse MoE (~10B active per Groq's config docs); open-source-family weights; self-evolving training methodology (autonomous scaffold optimization).

### Raw benchmarks found

> MiniMax official + AA/Vals rows via benchlm.ai (updated 2026-10-10). Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2: **57.0%** (MiniMax official — corroborated); TB2.1 (Vals): **48.7%** (fills); Terminal-Bench Hard: **39%** (AA — corroborated)
- Tau2-Bench Telecom: **84.8%** (AA — corroborates the earlier 85); Tau3-bench: **67.6%** (GLM-5.1 comparison table — fills)
- Claw-Eval: **48.7%** (Claw-Eval leaderboard — fills the previously-missing Claw row)
- GDPval-AA: **1087 Elo** / 25.7% (AA — fills the previously-missing GDPval row)
- Toolathon: **46.3%**; Toolathlon: **46.3%**; MM-ClawBench: **62.7%** with multi-turn Excel/PPT/Word editing (MiniMax official — corroborated)
- MLE-Bench Lite: **66.6%** (MiniMax official — new); APEX-Agents-AA: **10.6%**; AA Agentic Index: **16.8%**; Gert Labs: **40.40%** (benchlm.ai — weak rows)
- Agent Teams: **97% skill adherence** across 40+ complex skills (MiniMax claim)

Reasoning / knowledge:

- GPQA Diamond: **87.0–87.4%** (GLM-5.1 comparison table + AA — three-source agreement with Vals 86.6%)
- HLE: **28–29.6%** (comparison table + AA-HLE — corroborates the earlier 30)
- AIME26: **89.8%**; HMMT Nov 2025: **81.0%**; HMMT Feb 2026: **72.7%** (comparison table — new math rows); AIME25 (Arcee): 80.0%
- AA-LCR: **78.3%** (AA — fills/corroborates the earlier 78% long-context reading); CritPt: **0.6%** (AA — fills; weak)
- Artificial Analysis Intelligence Index: **22.8** (AA — corroborates the earlier 23.2, "Efficient" tier)
- AA-Omniscience: Index 0.8, accuracy **26.8%**, hallucination rate **35.6%** (benchlm.ai — moderate)
- MMLU-Pro: 80.4–80.8% (Vals/Arcee — lower than the family norm); AA-IFBench: **75.7%** (corroborates 76)

Coding:

- SWE-bench Verified*: **75.4%** (Arcee Trinity comparison table — fills the previously-missing SWE-V row)
- SWE-bench (Vals): **73.8%** (Vals — fills the independent row)
- SWE-Pro: **56.2%** (MiniMax official — corroborated; matches GPT-5.3-Codex); SWE-Rebench: **51.9%** (fills)
- LiveCodeBench (Vals): **79.9%** (fills the previously-missing LCB row); VIBE-Pro: **55.6%** (corroborated); Vibe Code Bench (Vals): **27.0%** (weak)
- SWE Multilingual: **76.5%**; Multi-SWE-Bench: **52.7%** (corroborated); NL2Repo: **39.8%**; React Native Evals: **71.4%** (fills)
- SciCode: **50.1%** (AA-SciCode — corroborates the earlier 50; below the 55%+ frontier mark); AA Coding Index: **52.6%** (corroborated)

Long context:

- Window: **197K / 131K out**; AA-LCR 78.3% measured (fills the previously-missing row); MRCR/RULER at window length: no verified public score found

Multimodal / vision:

- Design Arena Website: **1248** (OpenRouter); text-only in and out

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau2 84.8%, TB2 57%, Toolathon 46.3% and MM-Claw 62.7% hold the mid-band office/productivity automation profile, but the filled Claw-Eval 48.7%, GDPval-AA 1087, TB2.1 (Vals) 48.7%, APEX 10.6% and AA Agentic Index 16.8% cap it down from the old 80.
- **Reasoning: 78/100.** GPQA 86.6–87.4% (three-source agreement) and AIME26 89.8% (new) are strong; HLE 28–29.6% stays under the 40% bar, CritPt 0.6% is weak, AA Index 22.8 (corroborated) and MMLU-Pro ~80.5% (lower than family norm) cap it — lands at the old score.
- **Context window: 70/100.** 197K at the repo's open-model tier with a strong 131K output cap; AA-LCR 78.3% measured (fills).
- **Multimodal: 15/100.** Text-only in and out.
- **Coding: 84/100.** SWE-V* 75.4% (filled), SWE-bench (Vals) 73.8% (filled), SWE-Pro 56.2%, LCB (Vals) 79.9% (filled), VIBE-Pro 55.6% — broad production coding, short of the 58+ SOTA club; Vibe 27.0% weak.
- **Cost efficiency: 92/100.** No free ID, but $0.25/$1.00 (DeepInfra) to $0.30/$1.20 list is the cheapest capable open-weights paid tier measured here.
- **Overall Score: 65/100.** Mean of the five quality dims (76 + 78 + 70 + 15 + 84) / 5 = 64.6 → 65. Best fit: cheapest strong open-weights pick for productivity/office agents and multi-agent teams; not a frontier reasoner or multimodal.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-10 citing MiniMax official, AA, Vals and the GLM-5.1 comparison table — official plus independent sources; earlier draft via opper.ai's AA feed); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing Claw-Eval 48.7%, GDPval-AA 1087, Tau3 67.6%, SWE-V* 75.4%, SWE-bench (Vals) 73.8%, LCB 79.9%, AIME26 89.8% — Tool 80→76, Overall 65 (unchanged).
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.md`, using the same headings.
