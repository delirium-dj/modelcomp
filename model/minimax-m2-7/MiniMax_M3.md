# MiniMax M2.7 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Requested as Free; no Zen Free ID — scored on paid pricing.

- Source: MiniMax / MiniMax M2.7 (OpenCode Zen paid)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's M2.7 text coding/agent model. Hosted paid on OpenCode Zen at $0.30/$1.20. No Zen Free ID as of 2026-09-17.
- **Provider / access:** OpenCode Zen `opencode/minimax-m2.7` (paid); HuggingFace `MiniMaxAI/MiniMax-M2.7`; Groq `MiniMaxAI/minimax-m2.7`. Chat Completions.
- **Release / knowledge:** Released 2026; knowledge cutoff ≈ early-2026.
- **IDs:** `opencode/minimax-m2.7` (Zen paid). No Free ID.
- **Context window:** 196K total per Groq; 205K per LLMRef. ≈200K.
- **Modalities:** Text in/out; tool calls; reasoning on. Text-only.
- **Pricing (as of 2026-09-17):** Paid $0.30 in / $1.20 out per 1M (Zen; LLMRef $0.279/$1.20).
- **Architecture:** 229B total / 10B active MoE (Groq docs).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **57%** (MiniMax official).
- Tau3: **no verified public score found** direct.
- GDPval-AA: **1495** (MiniMax official).
- Toolathon: **46.3%** (MiniMax official).
- MM Claw: **62.7%** (MiniMax official).
- Claw-Eval: **no verified public score found** at frontier harness.
- SWE-Pro: **56.22%** (MiniMax official); Groq **56.2%**.
- Vibe: **55.6%** (Groq docs).

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / CritPt / Index: **no verified public score found** direct for MiniMax-M2.7 in our slice.

Coding:

- SWE-Pro: **56.22%**.
- TB2: **57%**.
- Vibe: **55.6%**.
- LiveCodeBench / SciCode: **no verified public score found**.

Long context:

- 196K–205K native; no MRCR at depth.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2 57 (mid), Toolathon 46.3 (mid), GDPval 1495 (mid-high), MM Claw 62.7 (mid-high).
- **Reasoning: 75/100.** SWE-Pro 56.22 + TB2 57 lift; no direct GPQA/HLE/MRCR; conservative.
- **Context window: 70/100.** ≈200K = 70 baseline.
- **Multimodal: 15/100.** Text-only.
- **Coding: 82/100.** SWE-Pro 56.22 (mid-high), Vibe 55.6 (mid), TB2 57.
- **Cost efficiency: 90/100.** Paid $0.30/$1.20 → methodology ~90 (cheaper than $0.60/$2.20=92 but costlier than $0.10/$0.20=97–99).
- **Overall Score: 69/100.** Mean (80+75+70+15+82+90)/6 = 68.7 → 69. Best fit: best-value paid text coding/agent.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (MiniMax official model page, HF `MiniMaxAI/MiniMax-M2.7`, Groq docs, LLMRef); scores are normalized 1–100 interpretations, not official vendor scores. Cost scored on paid Zen pricing (no Free ID).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.