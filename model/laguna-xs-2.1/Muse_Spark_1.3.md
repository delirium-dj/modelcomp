# Laguna XS 2.1 — findings by Muse Spark 1.3

- Source: Poolside/Laguna XS 2.1 (`opencode/laguna-xs-2.1`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's Jul 2026 open-weights (OpenMDW-1.1) 33B/3B-active MoE for local long-horizon agentic coding: SWE-Verified 70.9% with a 256K repo-warm context, terminal-task and tool-use design, free OpenRouter endpoint. Top use case: self-hosted coding agents on local machines.
- **Provider / access:** Poolside (Hugging Face open weights; NVIDIA NIM; vLLM/SGLang/TensorRT-LLM/Ollama; free OpenRouter endpoint); OpenCode Zen ID `opencode/laguna-xs-2.1`.
- **Release / knowledge:** 2026-07-02 Hugging Face / 2026-07-15 NIM (NVIDIA card); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/laguna-xs-2.1` (Zen-hosted; open weights, permissive OpenMDW-1.1).
- **Context window:** 256K (mr.technology spec rundown; benchmark runs at 256K; folder meta.json 262K HF figure — 256K used as the verified serving number). No public retrieval-at-length numbers found.
- **Modalities:** Text in/out only (text generation model per NVIDIA card); reasoning yes (thinking mode on in evals); tool-use workflows yes.
- **Pricing (as of 2026-09):** $0.06 input / $0.12 output per 1M via OpenRouter (folder meta.json; free tier available); mr.technology lists $0.10/$0.20. Self-host free under OpenMDW-1.1.
- **Architecture:** 33B total / 3B active MoE (256 experts + 1 shared, top-8 routing), 40 layers mixed 3:1 sliding-window + global attention, native FP8 KV cache, DFlash speculator; 30T+ training tokens lineage.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (NVIDIA NIM model card eval table; vs XS.2 35.7%, Qwen3.6-35B-A3B 51.5%, Haiku 4.5-class 29.8–36.0%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **70.9%** (NVIDIA NIM card; vs XS.2 69.9%, Qwen3.6-35B-A3B 73.4%)
- SWE-bench Multilingual: **63.1%** (NVIDIA NIM card; +5.4 over XS.2's 57.7% — largest single-bench jump)
- SWE-bench Pro (Public): **47.6%** (NVIDIA NIM card; above Haiku 4.5 and MAI-Code-1-Flash)
- SWE-bench Verified, Laguna XS.2 (Vals AI, by task difficulty): **79% / 61% / 17% / 0%** (Vals AI page — prior XS.2 cut, family proxy for difficulty falloff, not this cut's score)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (256K window verified via serving specs; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-task + tool-use design with TB 2.0 37.5% (ahead of Haiku-class, behind Qwen3.6-35B) is a modest verified agent signal; no Tau/GDPval/Claw numbers cap it at 62.
- **Reasoning: 60/100.** Provisional floor: zero public reasoning numbers for this pasta-cut specialist; capped hard pending any GPQA/HLE/Index coverage.
- **Context window: 74/100.** Verified 256K sits just above the 200K (= 70) anchor in the 200K–500K tier, configured to hold 200K-token repo context warm; no retrieval evidence.
- **Multimodal: 15/100.** Text-only in/out — standard text-only score.
- **Coding: 76/100.** SWE-Verified 70.9% + Multilingual 63.1% + Pro 47.6% is a strong verified size-class triple (beats Haiku 4.5 on Pro); missing LiveCode/DeepSWE numbers cap it at 76.
- **Cost efficiency: 100/100.** $0.06/$0.12 hosted with a free tier beats the $0.10/$0.20 reference; OpenMDW-1.1 self-hosting is free.
- **Overall Score: 57/100.** Mean of the five non-cost dims (62 + 60 + 74 + 15 + 76) / 5 = 57.4 → 57; best fit as a near-free local coding specialist, not a reasoner or multimodal pick.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (NVIDIA NIM model card + eval table, Poolside Laguna deeper-dive blog, mr.technology release rundown, Vals AI SWE-bench page for prior-cut proxy, S 2.1 launch coverage for lineage context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
