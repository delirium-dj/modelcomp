# MiniMax M2.7 — findings by Muse Spark 1.3 Contributor

- Source: MiniMax/M2.7, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), re-verified 2026-10-16 (UTC, see Re-verification section; scores hold 64)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (self-improving frontier MoE, no Zen Free ID)
- **Short description:** MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration and office productivity; scored on paid pricing as no Zen Free ID exists.
- **Provider / access:** MiniMax via api.minimax.io (`MiniMax-M2.7`, Chat Completions v2.1); OpenCode Zen paid `opencode/minimax-m2.7`.
- **Release / knowledge:** 2026 (M2.7 launch year); knowledge cutoff undisclosed
- **IDs:** `opencode/minimax-m2.7` (state explicitly: no Free ID exists on Zen)
- **Context window:** 196K–205K (200K class) / 131K out — verified via Groq docs (196K) + LLMRef (205K)
- **Modalities:** text in/out only; reasoning yes; tool calls yes; multi-agent collaboration yes
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M (LLMRef $0.279/$1.20 variant; no $0 tier)
- **Architecture:** proprietary MoE, ~229B total / 10B active (Groq docs)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1495 Elo** (MiniMax official page; highest among open-source per vendor)
- Terminal Bench 2: **57.0%** (MiniMax official page)
- Toolathon: **46.3%** (MiniMax official page)
- MM Claw (OpenClaw usage): **62.7%** (MiniMax official page, approaching Sonnet 4.6)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **56.22% SWE-Pro** (MiniMax official page, near Opus best)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **55.6% VIBE-Pro** (MiniMax official via Groq docs: end-to-end project delivery)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval 1495 + Toolathon 46.3% + MM Claw 62.7% show strong productivity tool use; capped by TB 57% below leaders.
- **Reasoning: 75/100.** Strong office-domain reasoning implied by GDPval/VIBE-Pro; capped by zero public GPQA/HLE/CritPt numbers.
- **Context window: 70/100.** 200K class maps to 70 tier; capped below 1M models.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 82/100.** SWE-Pro 56.2% + VIBE-Pro 55.6% are strong paid-tier coding; capped below 60%+ frontier.
- **Cost efficiency: 90/100.** Paid $0.30/$1.20 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 64/100.** Mean of the five non-cost dims (80+75+70+15+82)/5 = 64.4; best-fit cheap paid agentic coding and office productivity pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (MiniMax official M2.7 page, Groq docs, Hugging Face, LLMRef); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-16 (28 days after 2026-09-18)

Original research date 2026-09-18. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-16: (1) official MiniMax M2.7 model page (minimax.io + api.minimax.io docs), (2) Artificial Analysis MiniMax-M2.7 page (Index, GDPval, pricing), (3) Groq docs + BenchLM/BenchmarkList mirrors (196K context, 229B/10B MoE, SWE-Pro 56.22%, VIBE-Pro 55.6%). Conflicting results compared below.

| Dimension | 2026-09-18 | 2026-10-16 | Change |
|---|---|---|---|
| Tool use | 80 | 80 | hold — vendor GDPval 1495 + Toolathon 46.3% + MM Claw 62.7% + TB 57% stand, uncontradicted; no new Tau/Claw-independent absolute |
| Reasoning | 75 | 75 | hold — still zero public GPQA/HLE/CritPt numbers; no new reasoning absolute published |
| Context | 70 | 70 | hold — 200K class (196–205K) stands; no new retrieval-accuracy curve |
| Multimodal | 15 | 15 | hold — text-only confirmed; floor applies |
| Coding | 82 | 82 | hold — SWE-Pro 56.22% + VIBE-Pro 55.6% stand; no new LiveCode/DeepSWE absolute |
| Cost | 90 | 90 | hold — $0.30/$1.20 paid stands |
| Overall | 64 | 64 | hold — (80+75+70+15+82)/5 = 64.4 → 64 |

Reasoning remains the weakest-evidenced dimension (implied 75 on zero public GPQA/HLE/CritPt absolutes) — flagged again this pass; no new adverse evidence meets the bar for a downward change either. No Tau2/3, no TB2.1-independent, no LCR absolute found — prior gaps stand. Scores hold; no dimension delta meets the evidence bar for change.

Sources: https://www.minimax.io/platform/models · https://artificialanalysis.ai/models/minimax-m2-7 · https://groq.com/docs/models/minimax-m2-7
