# MiniMax M2.5 — findings by Beam

- Source: MiniMax/MiniMax M2.5, `minimax/minimax-m2.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's open-weight MoE (Feb 12, 2026): 230B total / 10B active, 200K context. BenchGecko not computed. SWE-Bench Verified 80.2%, Multi-SWE-Bench 51.3% (first place), BrowseComp 76.3%, BFCL multi-turn 76.8%. AIME 2025 86.3%, GPQA-D 85.2%. Open weights (Modified MIT). $0.15/$1.20 per 1M (standard) or $0.30/$2.40 (lightning).
- **Provider / access:** MiniMax API; OpenRouter; NVIDIA NIM; HuggingFace.
- **Release / knowledge:** Released 2026-02-12; knowledge cutoff not stated.
- **IDs:** `minimax/minimax-m2.5`
- **Context window:** 200,000 tokens; max output 196,608.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Modified MIT).
- **Pricing (as of 2026-10-17):** $0.15 / 1M input, $1.20 / 1M output (standard); $0.30 / $2.40 (lightning); paid.
- **Architecture:** MoE, 230B total / 10B active, 200K context, 10+ programming languages, Modified MIT.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- SWE-Bench Verified: **80.2%** (MiniMax official, NVIDIA NIM)
- Multi-SWE-Bench: **51.3%** (first place, MiniMax official)
- BrowseComp: **76.3%** (MiniMax official)
- BFCL multi-turn: **76.8%** (MiniMax official)
- Wide Search: industry-leading (MiniMax official)
- Vals Index: **65.01%** (Vals AI)
- SWE-bench (Vals): **74.20%** (Vals AI)
- Terminal-Bench 2.0 (Vals): **41.57%** (Vals AI)
- Vibe Code Bench v1.1 (Vals): **14.85%** (Vals AI)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA-D: **85.2%** (MiniMax official, NVIDIA NIM)
- AIME 2025: **86.3%** (MiniMax official, NVIDIA NIM)
- HLE w/o tools: **19.4%** (NVIDIA NIM)
- SciCode: **44.4%** (NVIDIA NIM)
- IFBench: **70.0%** (NVIDIA NIM)
- AA-LCR: **69.5%** (NVIDIA NIM)
- Vals Index: **65.01%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-Bench Verified: **80.2%** (MiniMax official)
- Multi-SWE-Bench: **51.3%** (first place, MiniMax official)
- SWE-bench (Vals): **74.20%** (Vals AI)
- Terminal-Bench 2.0 (Vals): **41.57%** (Vals AI)
- Vibe Code Bench v1.1 (Vals): **14.85%** (Vals AI)
- LiveCodeBench (Vals): **79.21%** (Vals AI)

Long context:

- 200K window; AA-LCR **69.5%** (NVIDIA NIM); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-Bench 80.2%, Multi-SWE 51.3%, BrowseComp 76.3%, BFCL 76.8%, Terminal-Bench 41.57%; caps at Terminal-Bench 41.57%.
- **Reasoning: 70/100.** GPQA-D 85.2%, AIME 86.3%, HLE 19.4%, AA-LCR 69.5%, SciCode 44.4%, IFBench 70.0%; caps at HLE 19.4%.
- **Context window: 64/100.** 200K window; AA-LCR 69.5%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 72/100.** SWE-Bench 80.2%, Multi-SWE 51.3%, LiveCodeBench 79.21%, Terminal-Bench 41.57%, Vibe Code 14.85%; caps at Vibe Code 14.85%.
- **Cost efficiency: 92/100.** Cheap $0.15–$0.30 / $1.20–$2.40 per 1M.
- **Overall Score: 63.6/100.** Mean of five quality dims (Vals Index 65.01); best-fit for open-weight agentic coding at low cost. (Superseded by M2.7, M3, M3.1 Flash Preview.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (MiniMax official, NVIDIA NIM, Vals AI, mlabonne, NYU RITS); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. MiniMax M2.5 is open-weight (Modified MIT). Superseded by M2.7 (Mar 18, 2026), M3 (Jun 1, 2026), M3.1 Flash Preview (Sep 27, 2026).<|end|>>2>: