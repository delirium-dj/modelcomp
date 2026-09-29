# Nemotron 3 Ultra Free — findings by Space Bunny Alpha

- Source: NVIDIA / OpenCode Zen (`nvidia/nemotron-3-ultra-550b-a55b`; free tier)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free tier)
- **Short description:** NVIDIA's open-weight hybrid Mamba-Transformer MoE for reasoning, coding, planning, tool calling, and long-running agents, accessed through a free Zen/NVIDIA route in this catalog.
- **Provider / access:** OpenCode Zen free tier `opencode/nemotron-3-ultra-free`; NVIDIA NIM `nvidia/nemotron-3-ultra-550b-a55b` with OpenAI- and Anthropic-compatible endpoints; weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B`. Also free on OpenRouter (`nvidia/nemotron-3-ultra-550b-a55b:free`) and Kilo Code.
- **Zen route status (checked 2026-09-29):** The free route **still exists**. OpenCode Zen's model list and pricing table both carry `nemotron-3-ultra-free` at Free / Free / Free. OpenCode's own note remains: "Nemotron 3 Ultra Free is available on OpenCode for a limited time. The team is using this time to collect feedback and improve the model." A second note adds a data-use restriction on this specific route: "Nemotron 3 Ultra Free (NVIDIA free endpoints): Trial use only — do not submit personal or confidential data. Your use is logged for security purposes and to improve NVIDIA products and services." The free route is explicitly time-limited, not a permanent entitlement.
- **Release / knowledge:** Released June 2026; BenchLM and OpenRouter list 2026-06-04. No reliable knowledge cutoff was shown in the reviewed official pages.
- **IDs:** `opencode/nemotron-3-ultra-free`; `nvidia/nemotron-3-ultra-550b-a55b`; `nvidia/nemotron-3-ultra-550b-a55b:free`.
- **Context window:** **Ambiguous, and clarified since 2026-09-24.** NVIDIA's NIM marketing page advertises **1M** context, but the NVIDIA NIM Day-0 deployment guide states the model "natively supports a context window of 262,144 tokens (256K)" and that this is the default `--max-model-len`. Artificial Analysis lists **262k** in its technical spec, while some comparison pages and BenchLM show 1M or 260k. The natively supported and independently measured limit is **262,144 tokens**; 1M is a claimed extension ceiling. Max output is 66K per OpenRouter.
- **Modalities:** Text input/output; reasoning mode and tool calling supported. Artificial Analysis explicitly records **no image input support**, so this is a text-only model.
- **Pricing (as of 2026-09-29):** Free on the Zen route and free on OpenRouter/Kilo Code/NVIDIA NIM free tiers. Paid NVIDIA reference pricing is about **$0.50 input / $2.20 output / $0.10 cached input** per 1M (blended ~$0.53–$0.58). Self-hosting costs depend on hardware.
- **Speed / latency (new since 2026-09-24):** Artificial Analysis measures **~138.9 output tokens/second** with a **2.16 s TTFT** on NVIDIA's API — faster than Gemma 4 31B (71.2 t/s) but with a longer time-to-first-token.
- **Architecture:** Open-weight hybrid Mamba-Transformer (Nemotron-H) MoE, 550B total and 55B active parameters; text-only and reasoning-capable. Artificial Analysis lists the license as **OpenMDW** (commercial use allowed, per the AA comparison table), replacing the 2026-09-24 note that the license was not exposed.

### Raw benchmarks found

> No NVIDIA model-card row changed since 2026-09-24. New addition: the Artificial Analysis Intelligence Index value, which the 2026-09-24 report did not carry. Caution: an AA article for the launch quotes an index of **47.7**; that is an **older index version**. The value on the model's own Artificial Analysis page under Intelligence Index **v4.3.2**, accessed 2026-09-29, is **38**.

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (NVIDIA Nemotron 3 Ultra model-card snapshot via BenchLM)
- Terminal-Bench 2.1 (Vals AI): **50.9%** (BenchLM, Vals AI leaderboard; different harness)
- BrowseComp: **44.4%** (NVIDIA model-card snapshot via BenchLM)
- τ³-bench Tool-Agent-User: **70.9%** (NVIDIA model-card snapshot via BenchLM)
- PinchBench: **90.0%** (NVIDIA model-card snapshot via BenchLM)
- Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (Artificial Analysis v4.3.2, accessed 2026-09-29) — new row, well above the comparable-class median of 26
- HLE: **26.7%** with tools and **26.7%** without tools (NVIDIA model-card snapshot via BenchLM; rows kept separate)
- MMLU-Pro: **86.8%** (NVIDIA model-card snapshot); Vals AI run **85.8%**
- GPQA Graduate-Level: **87%**; GPQA-D: **87.0%** (NVIDIA model-card snapshot); Vals AI GPQA Diamond **86.1%**
- MMLU-ProX: **83%**; IFBench: **81.7%** (NVIDIA model-card snapshot)
- LCR/MLCR, hallucination metrics, and exact additional knowledge values: **no verified public exact value found**

Coding:

- SWE-bench Verified: **71.9%** (NVIDIA model-card snapshot via BenchLM). A separate OpenRouter-listed run reports **70.7%**; the NVIDIA model-card figure is used here.
- SWE-bench (Vals AI): **69.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench v6: **89.0%** (NVIDIA model-card snapshot); Vals AI run **86.0%**
- SWE Multilingual: **67.7%** (NVIDIA model-card snapshot)
- SWE-bench Pro, DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- LongBench v2: **61.9%** (NVIDIA model-card snapshot via BenchLM)
- Native context: **262,144 tokens per the NVIDIA NIM deployment guide**; NVIDIA's marketing page claims 1M. Artificial Analysis measures 262k. **This corrects the 1M figure used on 2026-09-24.**

Sources consulted: [OpenCode Zen model list and pricing](https://opencode.ai/docs/zen), [Artificial Analysis Nemotron 3 Ultra](https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b), [NVIDIA NIM Day-0 guide for Nemotron 3 Ultra 550B-A55B](https://docs.nvidia.com/nim/large-language-models/2.0.6/day-0/get-started-nemotron-3-ultra.html), [NVIDIA NIM model page](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b), and [BenchLM Nemotron 3 Ultra](https://benchlm.ai/models/nemotron-3-ultra), accessed 2026-09-29. Provider-exact and Vals AI values are kept separate; the v4.3.2 index was read from the model's own page.

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged. Terminal-Bench 56.4%, τ³-bench 70.9%, BrowseComp 44.4%, and PinchBench 90.0% provide solid tool evidence; missing GDPval, Toolathlon, and MCP rows cap the score.
- **Reasoning: 83/100.** Unchanged. MMLU-Pro 86.8%, GPQA 87%, IFBench 81.7%, and the newly documented AA Intelligence Index of 38 are strong, while HLE 26.7% shows a meaningful limit.
- **Context window: 88/100.** **Changed from 94.** The 2026-09-24 report used 1M from the NVIDIA marketing page. The NVIDIA NIM deployment guide, the NIM default `--max-model-len`, and Artificial Analysis all give **262,144 tokens** as the natively supported and measured window, so the 1M figure is a claimed extension ceiling rather than a verified limit.
- **Multimodal: 15/100.** Unchanged. Artificial Analysis explicitly records no image input support and the reviewed official model page lists text input/output only; text-only models are floored at 15.
- **Coding: 88/100.** Unchanged. SWE-bench Verified 71.9%, LiveCodeBench v6 89.0%, and Vals SWE 69.0% support high coding ability; SWE-Pro/DeepSWE/SciCode remain missing.
- **Cost efficiency: 100/100.** Unchanged. The Zen route is still free and carries a 90-day-style trial-use data restriction; self-hosting hardware is not represented as a zero-cost production guarantee.
- **Overall Score: 71.6/100.** (84 + 83 + 88 + 15 + 88) / 5 = 71.6. Down from 72.8 because Context window moved 94 -> 88 on the corrected 262,144-token native limit. Best fit: free open-weight coding agents with long context, where text-only operation and the time-limited free route are acceptable.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenCode Zen's live model/pricing list, NVIDIA's NIM model page and Day-0 deployment guide, Artificial Analysis (Intelligence Index v4.3.2 read from the model's own page; the launch article's older 47.7 was rejected as stale), and BenchLM. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
