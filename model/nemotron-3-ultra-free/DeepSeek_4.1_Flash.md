# Nemotron 3 Ultra Free — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Nemotron 3 Ultra Free (`opencode/nemotron-3-ultra-free`, NVIDIA)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (Zen free tier of NVIDIA Nemotron 3 Ultra)
- **Short description:** NVIDIA's 550B-parameter Mixture-of-Experts orchestrator model (55B active) for frontier reasoning and orchestration inside long-running agentic systems. It is designed as the "system of models" component for planning and hard calls, paired with a smaller execution model, and it claims 5× higher throughput than comparable open models while cutting cost-to-task by up to 30% via fewer tokens per turn.
- **Provider / access:** OpenCode Zen free ID (OpenAI-compatible) and NVIDIA's hosted endpoints on build.nvidia.com. **Zen's privacy page marks the NVIDIA free endpoints as trial use only** — do not submit personal or confidential data; sessions are logged for security and product improvement, though not linked to your identity. A third-party tracker flags the Zen record as a derivative/community packaging rather than an official vendor release.
- **Release / knowledge:** Released 2026-06-04; training material refreshed through 2025-09-30 (GitHub tokens) plus later synthesized data.
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen free); NVIDIA model id `nvidia/nemotron-3-ultra-550b-a55b` (weights on Hugging Face, also on OpenRouter).
- **Context window:** 1,000,000 tokens with a 128,000-token max output on the Zen free tier (tracker-verified). NVIDIA advertises Ruler results at 1M context length without publishing the numeric value.
- **Modalities:** text in / text out only. Tool calling ✓, reasoning ✓, open weights ✓, temperature control ✓; structured-output/JSON mode is **not reported** for the free ID. No image, audio or video input.
- **Pricing (as of 2026-09-18):** **Free** through Zen and free/trial on NVIDIA's endpoints; no per-token price is published for the Zen ID. Paid routes exist via OpenRouter and third-party hosts; weights are open for self-hosting.
- **Architecture:** 550B-parameter MoE with 55B active; hybrid Mamba-Transformer design, NVFP4 precision running on Hopper, Blackwell and Ampere GPUs, LatentMoE expert routing, multi-token prediction to cut generation time, and Multi-Teacher On-Policy Distillation across 10+ specialized teachers.

### Raw benchmarks found

> NVIDIA's launch blog reports these head-to-head values against GLM-5.1 (744B),
> Kimi K2.6 (1T) and Qwen3.5 (397B). BenchLM re-published the Hugging Face model-card rows and Artificial Analysis/Vals AI leaderboard rows on 2026-10-06; where vendor and independent figures differ, both are listed.

Agent / tool use:

- PinchBench (agent productivity / long-running tasks): **91%** (NVIDIA) / **90.0%** (Hugging Face card via BenchLM; GLM-5.1 84%, Kimi K2.6 91%, Qwen3.5 89%)
- Terminal-Bench 2.0: **54%** (NVIDIA; GLM-5.1 64%, Kimi K2.6 67%, Qwen3.5 53%); Terminal-Bench 2.1: **56.4%** (HF card) / **53.9%** (Artificial Analysis) / **50.9%** (Vals AI)
- τ³-bench: **70.9%** (HF card via BenchLM); τ²-bench: **83.3%** (Artificial Analysis via BenchLM)
- EnterpriseOps-Gym (long-horizon planning): **33%** (NVIDIA) / **28.9%** (AA EnterpriseOps-Gym via BenchLM)
- GDPval-AA: **1,448** (NVIDIA; GLM-5.1 1,594, Kimi K2.6 1,508, Qwen3.5 1,192) / **1,016** (Artificial Analysis) / **33.1%** normalized (HF card via BenchLM)
- BrowseComp: **44.4%** (HF card via BenchLM)
- ProfBench (Search): **56%** (NVIDIA; GLM-5.1 46%, Kimi K2.6 56%)
- IFBench (instruction following): **82%** (NVIDIA) / **81.7%** (HF card) / **81.4%** (AA)
- Harvey LAB: **81.7%** (Artificial Analysis via BenchLM); TerminalBench-Hard: **36.4%**; AA Briefcase: **876 Elo**
- APEX multi-step agentic: **11.5%** (Epoch AI via Model Beat) — the weakest agentic signal found
- AA AnalystAgent: **6.3%**; AA AutomationBench: **3.0%**; AA Tau3 Banking: **14.2%**; AA Terminal-Bench 4.0: **0.5%**; GDP.pdf: **5.0%**
- AA Agentic Index: **21.7%**
- Claw-Eval / ClawProBench, Toolathon / MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (HF card via BenchLM) / **86.7%** (Artificial Analysis) / **86.1%** (Vals AI) / **85.4%** (Epoch AI via Model Beat)
- MMLU-Pro: **86.8%** (HF card via BenchLM) / **85.8%** (Vals AI); MMLU-ProX: **83%**
- HLE: **26.7%** (HF card) / **28.4%** (Artificial Analysis); HLE with tools: **37.4%**
- AIME 2024/2025: **86.7%**; WeirdML: **43.5%** (Epoch AI via Model Beat)
- CritPt: **3.1%** (HF card via BenchLM); MLCR-AA: **11.1%**
- AA-LCR: **67.0%** (HF card via BenchLM); LongBench v2: **61.9%**
- Ruler at 1M context: claimed as leading by NVIDIA, **no numeric value published**
- Artificial Analysis Intelligence Index: **22.9%**; BenchLM overall **46.68/100, rank #109 of 887**; Model Beat tracker placed it at the **28th percentile** overall and **16th percentile** on agentic
- Omniscience Accuracy: **21.6%**, Index **-0.4%**, Hallucination Rate **29.7%** (via BenchLM)

Coding:

- SWE-bench Verified: **71.9%** (HF card via BenchLM) / **69.0%** (Vals AI) — the first published SWE-bench score for Ultra
- SWE Multilingual: **67.7%** (HF card via BenchLM)
- LiveCodeBench v6: **89.0%** (HF card) / **86.0%** (Vals AI); SciCode: **44.6%** (HF card) / **40.3%** (AA)
- Terminal-Bench 2.0/2.1 (coding-agent proxy): **54%** (NVIDIA) / **56.4%** (HF card)
- AA Coding Index: **49.3%**
- SWE-bench Pro / Vibe Code Bench / DeepSWE: **no verified public score found**
- Throughput claim: **5× higher than comparable open models** (NVIDIA); NVIDIA says up to 30% lower cost-to-task from fewer tokens on SWE-bench

Long context:

- NVIDIA claims leading Ruler accuracy **at 1M context length** but publishes no value; third-party AA-LCR **67.0%** and LongBench v2 **61.9%** are now the nearest published long-context signals, though no MRCR/RULER recall-at-depth number exists.

### Normalized scores (1–100)

- **Tool use: 78/100.** PinchBench 90–91%, τ²-bench 83.3%, τ³ 70.9% and GDPval-AA 1448 with 5× throughput back a serious orchestrator claim, but Terminal-Bench 2.1 at ~51–56% trails GLM-5.1/Kimi, and APEX 11.5% and AutomationBench 3.0% are weak.
- **Reasoning: 77/100.** GPQA Diamond 87.0%, MMLU-Pro 86.8% and AA-LCR 67.0% are strong, but the newly published HLE 26.7% and CritPt 3.1% are weak and the AA Intelligence Index sits at 22.9%.
- **Context window: 95/100.** 1M tokens with a 128K output ceiling; AA-LCR 67.0% and LongBench v2 61.9% are the first third-party long-context measurements, but no ≥512K recall-at-depth benchmark exists, so it takes the ≥1M tier floor.
- **Multimodal: 15/100.** Text-in/text-out only — no image, audio, video or PDF input.
- **Coding: 80/100.** SWE-bench Verified 71.9% and SWE Multilingual 67.7% with LiveCodeBench v6 89.0% now exist and are solid; SciCode 44.6% and a 49.3% coding index trail the frontier coder tier.
- **Cost efficiency: 100/100.** Free through Zen and NVIDIA trial endpoints with open weights for self-hosting; the price is logged trial usage and a no-confidential-data restriction.
- **Overall Score: 69/100.** (78 + 77 + 95 + 15 + 80) / 5 = 69.0 → **69**. Best fit: free orchestration/planning calls inside a routed agent system, with a smaller execution model handling high-volume steps.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (NVIDIA Nemotron 3 Ultra launch blog, Hugging Face model card and Artificial Analysis/Vals AI rows via BenchLM re-verified 2026-10-06, Epoch AI figures via Model Beat, modelcompare.dev Zen record, OpenCode Zen privacy page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.