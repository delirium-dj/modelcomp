# Qwen 3.8 (27B) — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.8-27B`, Apache 2.0 open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B (open-weights release of the Qwen 3.8 family; not the Qwen3.8-Max flagship, which is a separate API model)
- **Short description:** Alibaba's 27B dense open-weight model compressing Qwen3.8-Max's training recipe into a single-GPU-class model; strongest use cases are agentic coding, computer use and vision reasoning. Best-in-table open-weights model in its size class on Alibaba's own numbers.
- **Provider / access:** Free Apache 2.0 weights on Hugging Face (`Qwen/Qwen3.8-27B`); hosted access via gateways such as OrcaRouter (`$0.33/$2.40` per 1M in/out, 262K context, p50 TTFT 225ms). OpenAI-compatible Chat Completions API on hosted platforms. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-08-14 on Hugging Face (Day-0 AMD support); knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (open weights); hosted `qwen3.8-27b` per gateway catalogs.
- **Context window:** 262,144 tokens native (Alibaba model card; 256K used in official eval runs), extensible to 1,000,000 with YaRN scaling; max output 32,768 tokens in official runs.
- **Modalities:** image and video input; text output; reasoning yes (explicit reasoning mode); tool calls (agentic benchmarks run with the Claude Code harness); JSON mode via OpenAI-compatible API.
- **Pricing (as of 2026-09-24):** Free open weights under Apache 2.0 (~55.6GB BF16; 4-bit fits a 24GB card); self-hosting is $0/token but requires your own GPUs (24.5 tok/s on Ryzen AI Max+ 395, 51.8 tok/s on Radeon AI PRO R9700 per AMD llama.cpp/Vulkan tests); hosted alternative $0.33 / $2.40 per 1M in/out.
- **Architecture:** 27B dense parameters (28B counting the vision encoder), 64 layers, hidden size 5120, hybrid attention (48 Gated DeltaNet linear-attention layers + 16 full-attention layers, 3:1 ratio), Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0** (Alibaba model card, Aug 14 2026; vs Qwen3.6-27B 63.4; loses to Opus 4.6 Max 78.2)
- OSWorld-Verified: **84.3** (model card; vs 63.9 predecessor)
- AndroidWorld: **81.9** (model card)
- WebArena-Verified: **64.8** (model card)
- CoWorkBench: **70.7** (in-house Qwen benchmark, model card)
- JobBench: **33.4** (model card)
- Agents' Last Exam: **20.4%** Pass@1 / **42.9** score (model card)
- Harvey's Legal Agent benchmark: adapted 27B averaged **67%** on 250 legal tasks, #1 open-weight claim (Harvey/Engram study, Alibaba-stated; model trained on the test corpus first, so provisional for stock weights)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2** (Alibaba model card; vs Opus 4.6 Max 91.3)
- HLE (Humanity's Last Exam): **30.8** (model card, GPT-4o-judged; vs Opus 4.6 Max 40.0)
- IFBench: **79.5** (model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for the 27B (no AA index published at time of research)
- MathVision: **94.6** with CI / **90.0** without (model card)
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **90.3** (Alibaba model card)
- SWE-bench Pro: **61.7** (model card, Claude Code harness per footnote; vs 53.5 predecessor)
- QwenSWEBench: **79.0** (in-house benchmark, Claude Code harness)
- DeepSWE 1.1: **42.2** (model card; ~3x jump from 13.3)
- NL2Repo-Bench: **42.3** (model card)
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Code Arena WebDev: **#9 overall, score 1595** (Arena.ai leaderboard, independent placement; only model in its size class in the top 10)
- Image-to-WebDev: **#1 open model, #7 overall, score 1574** (Arena.ai leaderboard, independent placement)

Long context:

- 262K native context; no MRCR/RULER/GraphWalks retrieval value verified for this exact model (256K window used in official eval runs)

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld-Verified 84.3%, AndroidWorld 81.9% and Terminal-Bench 2.1 73.0% are strong agentic results that beat many larger models; in-house-benchmark share (CoWorkBench, QwenSWEBench) and the missing GDPval/Tau3 numbers keep it under 85.
- **Reasoning: 78/100.** GPQA Diamond 89.2% sits just under the 90% frontier reference; HLE 30.8% stays well under the 40% bar and no independent index run exists — frontier math/multidisciplinary reasoning is where it still loses.
- **Context window: 78/100.** 262K native tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); the 1M YaRN extension is a scaling claim, not a measured retrieval.
- **Multimodal: 82/100.** Native image + video input with strong vision benchmarks (MathVision 94.6 with CI, OmniDocBench 91.1); text-only output and the CI-vs-no-CI gap on vision scores cap it in the 75–90 band.
- **Coding: 82/100.** LiveCodeBench v6 90.3% and independent Code Arena #9 (1595) are elite signals, but SWE-bench Pro 61.7% (Claude Code harness caveat) and DeepSWE 42.2% trail frontier models on deep engineering.
- **Cost efficiency: 97/100.** Free Apache 2.0 weights ($0/token self-hosted) and a cheap hosted fallback at $0.33/$2.40 per 1M put it near the ~$0.10/$0.20 = 97–99 methodology reference.
- **Overall Score: 80/100.** Mean of the five quality dims (78 + 78 + 78 + 82 + 82) / 5 = 79.6 → 80. Best-fit: self-hosted or cheap hosted agent model for screen-driven, tool-using coding workflows where open weights and GPU-friendly size matter more than frontier reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Alibaba model card coverage via OrcaRouter benchmark roundup, qubrid.com, hokai.io, regolo.ai, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
