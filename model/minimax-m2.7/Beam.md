# MiniMax M2.7 — findings by Beam

- Source: MiniMax/MiniMax M2.7, `minimax/minimax-m2.7`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight MoE (Mar 18, 2026): 229B total / 10B active, 205K context. BenchGecko 65.3. SWE-Pro 56.22%, VIBE-Pro 55.6%, Terminal Bench 2 57.0%, GDPval-AA 1495 ELO (highest among open-source). Open weights (Modified MIT). $0.30/$1.20 per 1M.
- **Provider / access:** MiniMax API; OpenRouter; NVIDIA NIM; Groq (Enterprise).
- **Release / knowledge:** Released 2026-03-18; knowledge cutoff not stated.
- **IDs:** `minimax/minimax-m2.7`
- **Context window:** 204,800 tokens; max output 131,072.
- **Modalities:** text in; text out; reasoning yes (interleaved thinking); tool calling yes. Open weights (Modified MIT).
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $1.20 / 1M output; paid.
- **Architecture:** MoE, 229B total / 10B active, 62-layer decoder, 256 experts, pre-trained on 29.2T tokens, Modified MIT.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- GDPval-AA: **1495 ELO** (highest among open-source, MiniMax official)
- Toolathlon: **46.3%** (NVIDIA model card)
- MM Claw: **62.7%** (NVIDIA model card)
- MLE Bench Lite: **66.6%** medal rate (NVIDIA model card)
- NL2Repo: **39.8%** (NVIDIA model card)
- LiveBench Agentic Coding: **50.0%** (BenchGecko)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: not reported for M2.7
- MMLU Pro: not reported for M2.7
- AIME 2026: not reported for M2.7
- AA Intelligence Index: not reported
- LiveBench Reasoning: **74.8%** (BenchGecko)
- LiveBench Mathematics: **80.5%** (BenchGecko)
- Chatbot Arena Elo — Overall: **1416.6** (BenchGecko)
- Chatbot Arena Elo — Coding: **1395.1** (BenchGecko)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-Pro: **56.22%** (MiniMax official)
- VIBE-Pro: **55.6%** (MiniMax official)
- Terminal Bench 2: **57.0%** (MiniMax official)
- SWE-bench Verified: **75.4%** (BenchLM)
- SWE-Rebench: **51.9%** (BenchLM)
- LiveBench Coding: **54.9%** (BenchGecko)
- LiveBench Data Analysis: **56.3%** (BenchGecko)

Long context:

- 205K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 66/100.** GDPval-AA 1495 ELO, Toolathlon 46.3%, MM Claw 62.7%, MLE Bench 66.6%, NL2Repo 39.8%; caps at Toolathlon 46.3%.
- **Reasoning: 68/100.** LiveBench Reasoning 74.8%, LiveBench Mathematics 80.5%, Arena Elo 1416.6; caps at no published GPQA/HLE/MMLU-Pro.
- **Context window: 62/100.** 205K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** SWE-Pro 56.22%, VIBE-Pro 55.6%, Terminal Bench 2 57.0%, SWE-bench Verified 75.4%, LiveBench Coding 54.9%; caps at LiveBench Coding 54.9%.
- **Cost efficiency: 90/100.** Cheap $0.30/$1.20 per 1M.
- **Overall Score: 60.4/100.** Mean of five quality dims (BenchGecko 65.3); best-fit for open-weight agentic coding at low cost. (Superseded by M2.7-highspeed, M3, M3.1 Flash Preview.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (MiniMax official, NVIDIA NIM, BenchGecko, Groq docs, miniai.chat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. MiniMax M2.7 is open-weight (Modified MIT). M3 (Jun 1, 2026) and M3.1 Flash Preview (Sep 27, 2026) supersede it.<|end|>>2>