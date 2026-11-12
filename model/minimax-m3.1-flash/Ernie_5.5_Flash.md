# MiniMax-M3.1-Flash — findings by Ernie 5.5 Flash

- Source: MiniMax/MiniMax-M3.1-Flash (`minimax-m3.1-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3.1-Flash
- **Short description:** MiniMax's frontier multimodal coding model (released 2026-10-19) with a 1M context and tunable thinking depth — the Flash successor to MiniMax-M3. Also covers the "Space Bunny" stealth name (one model).
- **Provider / access:** MiniMax API (`MiniMax-M3.1-Flash`), NVIDIA NIM (free), OpenRouter, OpenCode Go, MiniMax China, Empirio Labs, plus ~25 routes. Open weights.
- **Release / knowledge:** 2026-10-19; knowledge cutoff not published.
- **IDs:** `minimax-m3.1-flash`, `minimax/MiniMax-M3.1-Flash`, `minimaxai/MiniMax-M3.1-Flash`, `nvidia/minimaxai/minimax-m3.1-flash`.
- **Context window:** 1,000,000 tokens (262,144 on the NVIDIA route); max output 262,144.
- **Modalities:** text, image and video in; text out; reasoning with tunable thinking depth and tool calls.
- **Pricing (as of 2026-11-11):** $0.15 / $0.60 per 1M input/output on MiniMax/OpenCode; the NVIDIA NIM route is free. Empirio lists $0.1125/$0.45.
- **Architecture:** open-weight sparse MoE (MiniMax).

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **62.2%** (best verified row); OSWorld 2.0: **61.7%**; Terminal-Bench 4.0: **38.10%**
- BankerToolBench: **76.2**; CyberGym: **82.2%**; Agents' Last Exam: **29.6%**
- PostTrainBench v1.1: **39.3%**; SWE Refactor Bench: **23.0** (weak); LOCA-Bench 256K: **60.3**

Reasoning / knowledge:

- HLE without tools: **43.4%** (mid for an open model)
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- DeepSWE: **73.7%**; NL2Repo: **61.2%** (both strong for the price)
- SWE Refactor Bench: **23.0**; Terminal-Bench 4.0: **38.1%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context (262K on NVIDIA); LOCA-Bench 256K **60.3** is the only long-context row

### Normalized scores (1–100)

- **Tool use: 78/100.** AutomationBench 62.2%, OSWorld 2.0 61.7% and CyberGym 82.2% are strong for an open Flash model; TB4.0 38.1% and SWE Refactor 23.0 cap it.
- **Reasoning: 68/100.** HLE 43.4% without tools is the only verified reasoning row and it is mid; no GPQA/ARC/FrontierMath publication.
- **Context window: 80/100.** 1,000,000 tokens on the MiniMax route (262,144 on NVIDIA), with 262,144 max output.
- **Multimodal: 80/100.** Text, image and video in with CharXiv 82.5% and BabyVision 91.0% (with Python) proving visual reasoning; no public video row.
- **Coding: 78/100.** DeepSWE 73.7% and NL2Repo 61.2% are the best verified coding rows in the MiniMax line, but SWE Refactor 23.0 and TB4.0 38.1% are weak.
- **Cost efficiency: 95/100.** $0.15/$0.60 per 1M with a free NIM route and open weights.
- **Overall Score: 76.8/100.** Best fit for cheap multimodal coding subtasks and high-volume agent routing; not a frontier reasoner.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (MiniMax model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMaxAI/MiniMax-M3.1-Flash — Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)
  - [MiniMax M3.1 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/minimax-m3-1-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_v2.md`, using the same headings.