# MiniMax M2.7 — findings by GLM 5.3 Flash

- Source: MiniMax (`minimax-m2.7`; no Zen Free ID — scored on paid pricing)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (standard variant; a "highspeed" variant exists)
- **Short description:** MiniMax's March 2026 "self-evolving" 229B MoE: it participated in its own development (100+ autonomous scaffold-optimization rounds, built part of its own research-agent harness) and ships with native **Agent Teams** multi-agent collaboration. Strong productivity automation: 97% skill adherence across 40+ complex skills and multi-turn Excel/PowerPoint/Word editing.
- **Provider / access:** MiniMax API; OpenCode Zen lists paid `opencode/minimax-m2.7` (no `*-free` ID found); gateway routes on opper: DeepInfra, Fireworks, Geodd, Infercom, Morph, Novita, SCX. OpenAI-compatible Chat Completions.
- **Release / knowledge:** released 2026-03-18 (opper: 34 days after M2.5). Knowledge cutoff not verified in this pass.
- **IDs:** `minimax-m2.7` (MiniMax) / `opencode/minimax-m2.7` (Zen, paid). **No Free ID** — scored on paid pricing.
- **Context window:** 197K input (opper; Groq docs 196K, LLMRef 205K) / 131K max output.
- **Modalities:** text in / text out. Agent Teams (stable role identity, autonomous decision-making), tool use, structured output, reasoning.
- **Pricing (as of 2026-09-18):** $0.25 in / $1.00 out per 1M (DeepInfra, cache $0.05); list $0.30/$1.20 on Fireworks/Novita/Geodd/Morph. No free tier; no Zen Free ID.
- **Architecture:** 229B sparse MoE (~10B active per Groq's config docs); open-source-family weights; self-evolving training methodology (autonomous scaffold optimization).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **57.0%** (MiniMax official); Terminal-Bench Hard: **39%** (AA via opper)
- τ²-Bench Telecom: **85%** (AA via opper)
- Toolathon: **46.3%**; MM Claw (office productivity): **62.7%** with multi-turn Excel/PPT/Word editing (MiniMax official)
- Agent Teams: **97% skill adherence** across 40+ complex skills (MiniMax claim)

Reasoning / knowledge:

- GPQA Diamond: **87%**; HLE: **30%**; IFBench: **76%**; long-context reasoning: **78%** (AA via opper)
- Artificial Analysis Intelligence Index: **23.2** (global rank #148/643, "Efficient" tier) (AA via opper)

Coding:

- SWE-Pro: **56.22%** — matches GPT-5.3-Codex (MiniMax official)
- VIBE-Pro: **55.6%**; SWE Multilingual: **76.5**; Multi-SWE-Bench: **52.7** (MiniMax official)
- SciCode: **50%**; AA Coding Index: **52.6** (AA via opper)

Long context:

- Window: **197K / 131K out**; long-context reasoning 78% (AA); MRCR/RULER at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 80/100.** τ² Telecom 85 + TB2 57 + Toolathon 46.3 + MM Claw 62.7 + Agent-Teams skill adherence — excellent office/productivity automation, mid-tier on hard terminal work (TB-Hard 39).
- **Reasoning: 78/100.** GPQA 87 / HLE 30 / IFBench 76 — GLM-5.1-class knowledge, "Efficient"-tier AA II 23.2.
- **Context window: 70/100.** 197K at the repo's open-model tier with a strong 131K output cap.
- **Multimodal: 15/100.** Text-only in and out.
- **Coding: 84/100.** SWE-Pro 56.22 (GPT-5.3-Codex parity), VIBE-Pro 55.6, SWE-Multilingual 76.5, Multi-SWE 52.7 — broad production coding, short of the 58+ SOTA club.
- **Cost efficiency: 92/100.** No free ID, but $0.25/$1.00 (DeepInfra) to $0.30/$1.20 list is the cheapest capable open-weights paid tier measured here.
- **Overall Score: 65/100.** Mean: (80 + 78 + 70 + 15 + 84 + 92) / 6 = 419/6 = 69.8 → **70**. Best fit: cheapest strong open-weights pick for productivity/office agents and multi-agent teams; not a frontier reasoner or multimodal.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (opper.ai MiniMax M2.7 model page with AA benchmark feed and 7-route pricing table; MiniMax official benchmark claims as quoted there); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
