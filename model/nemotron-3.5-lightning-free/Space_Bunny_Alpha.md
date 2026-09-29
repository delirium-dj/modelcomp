# Nemotron 3.5 Lightning Free — findings by Space Bunny Alpha

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`; OpenCode Zen free route)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-validation 2026-09-29 — what changed since the 2026-09-24 report.**
> The Zen free route **still exists** and its terms are unchanged. Four real corrections:
> (1) Artificial Analysis now has an Intelligence Index row for the base checkpoint and
> it is **16 (estimated), #19/140** — not the 24 reported at launch; (2) AA reports
> **290.7 output tokens/s, #3/140** and **0.60 s TTFT**, new speed evidence the previous
> report had no basis for; (3) the **Zen free route's context is 262K, not 1M** — the 1M
> figure belongs to the underlying checkpoint and to OpenRouter's own free listing;
> (4) AA counts the model at **31.6B total / 3.6B active**, not 30B/3B. Reasoning and
> Context window scores moved down as a direct result; **Overall 51.6 -> 49.6**.

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's open hybrid Mamba-Transformer MoE execution model for high-volume, low-latency agent steps, tool calls, result validation, and subagent delegation.
- **Provider / access:** NVIDIA weights and NIM; OpenCode Zen `opencode/nemotron-3.5-lightning-free`; local serving through vLLM, SGLang, and TensorRT-LLM. The underlying model card documents a `qwen3_coder` tool-call parser.
- **Free route status (re-checked 2026-09-29):** **still live.** The OpenCode Zen documentation still lists it as "Nemotron 3.5 Lightning Free (NVIDIA free endpoints): Trial use only — do not submit personal or confidential data. Your use is logged for security purposes and to improve NVIDIA products and services." A free route is also offered independently by NVIDIA NIM and by OpenRouter (`nvidia/nemotron-3.5-lightning:free`, 200 req/day). No withdrawal, deprecation, or retirement date found for any of the three.
- **Release / knowledge:** Released 2026-08-11 (AA and the model card). No reliable knowledge cutoff is published anywhere.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`; `opencode/nemotron-3.5-lightning-free`; OpenRouter `nvidia/nemotron-3.5-lightning:free`.
- **Context window:** **Two different numbers, and the previous report blurred them.** The official NVFP4 checkpoint is validated for up to **1,000,000 tokens** (confirmed by AA, which reports a 1.0M window, and by OpenRouter's free listing). The **OpenCode Zen free route is listed at 262K** — the smaller hosted serving configuration. Do not plan a 1M prompt against this slug.
- **Max output:** **65,536 tokens** on the OpenRouter free listing (`nvidia/nemotron-3.5-lightning:free`). The Zen route publishes no separate max-output figure.
- **Modalities:** Text input/output; reasoning toggleable; function/tool calling, structured output, and temperature control supported. Text only — AA explicitly records no image input, and the official card describes English and coding use with some multilingual support.
- **Pricing (as of 2026-09-29):** OpenCode Zen free route is **$0** (trial/promotion, logged, no confidential data). The paid base checkpoint is **$0.06 input / $0.20 output per 1M**, with a **17% cache-read discount** (AA, median across its 7 providers). Cost per Intelligence Index task is not yet scored by AA.
- **Architecture:** Open-weight hybrid Mixture-of Experts using **Mamba and Transformer layers with Multi-Token Prediction (MTP)**, 30B total / 3B active per NVIDIA's own naming; **AA counts 31.6B total, 3.6B active**. Speculative decoding from the MTP head. OpenMDW License 1.1, which AA confirms permits commercial use without restrictions. Training recipe released publicly (pretrain, SFT, RL stages under `github.com/NVIDIA/nemotron`); no separate technical report exists.
- **Ecosystem / adoption:** Ollama library entry at **146.6K downloads, updated 2 days ago**. NVIDIA positions it as the execution layer of always-on agents in harnesses like OpenClaw and Hermes Agent, under the open-source NemoClaw security/management stack. OpenCode's own usage telemetry puts it at roughly 160K unique users and 1.4M completed sessions over the last two months, at $0.08 in / $0.20 out.

### Raw benchmarks found

**Changed 2026-09-29 — the official NVFP4 column below is unchanged from 2026-09-24.** No NVIDIA benchmark row moved. The new material is Artificial Analysis's independent measurement of the base checkpoint.

Agent / tool use:

- Terminal-Bench 2.1: **23.46%**
- PinchBench: **83.43%**
- BrowseComp: **36.81%**
- τ³-Bench Banking: **9.48%**
- GDPval-AA-V2: **865** (published as an Elo-style value)
- **Artificial Analysis Terminal-Bench (v4.0, inside the v4.3.2 index):** folded into the composite below; no standalone AA Terminal-Bench 4.0 figure is published for this model.
- Toolathlon, Claw-Eval, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 16 (estimated), #19/140** (live, 2026-09-29). This is a **new** row and it is the single most consequential change in this re-validation. The model's own AA page banner still reads "Index v4.2" and the launch article announced **24**; both are stale. The current **v4.3.2** value — 10 evals: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1 — is **16**, confirmed on AA's v4.3.2 comparison surface. The drop from 24 to 16 is an index-redefinition artefact, not a model regression: Terminal-Bench moved 2.1 -> 4.0 and τ³-Banking was replaced by AutomationBench-AA. AA notes the median for comparable open-weight models of this size is 4.
- GPQA Diamond (no tools): **75.57%**
- HLE (text-only, no tools): **10.47%**
- MMLU-Pro: **81.62%**
- AA-Omniscience: **16.63%**
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact score found**

Coding:

- SWE-bench Verified: **52.80%**
- SWE-bench Multilingual: **36.47%**
- SciCode: **31.38%**
- LiveCodeBench, Vibe Code Bench, and DeepSWE: **no verified public exact score found**

Long context:

- AA-LCR: **49.19%** at the model's long-context evaluation (official NVFP4 model-card table). The AA v4.3.2 composite incorporates AA-LCR v1.1; no standalone AA AA-LCR figure is published for this model.
- Native/validated context: up to 1M tokens on the checkpoint (262K on the Zen free route); no independent retrieval-at-length score was found.

Speed / latency (new this cycle, Artificial Analysis, base checkpoint):

- **Output speed: 290.7 tokens/second, #3 of 140** — AA scores it 4/4 units for speed and calls it "notably fast (97)". Other AA comparison pages quote 290–317 tokens/s depending on the day and provider mix.
- **Time to First Token: 0.60 s** (measured on AA's v4.3.2 comparison surface against Gemini 3.7 Flash (high) at 12.75 s). This is the model class's genuine standout and was entirely absent from the 2026-09-24 report.
- NVIDIA's own claim, unverified independently: "4x higher throughput and 30% lower task completion time compared to other leading open models of similar size."

Sources consulted: [official NVIDIA Hugging Face model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4), [Artificial Analysis Nemotron 3.5 Lightning model page](https://artificialanalysis.ai/models/nemotron-3-5-lightning), [Artificial Analysis Gemini 3.7 Flash vs Nemotron 3.5 Lightning comparison (v4.3.2)](https://artificialanalysis.ai/models/comparisons/gemini-3-7-flash-vs-nemotron-3-5-lightning), [NVIDIA training recipe docs](https://docs.nvidia.com/nemotron/nightly/nemotron/lightning35/README.html), [NVIDIA technical blog](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents/), [OpenCode Zen documentation](https://opencode.ai/docs/zen/), [OpenRouter free listing](https://openrouter.ai/nvidia/nemotron-3.5-lightning%3Afree), [Ollama library entry](https://ollama.com/library/nemotron-3.5-lightning), and freellm.net's OpenCode Zen catalogue, all accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 48/100.** Unchanged — no new agentic row appeared. PinchBench 83.43% is strong for high-volume execution, but Terminal-Bench 2.1 23.46%, BrowseComp 36.81%, and τ³-Bench Banking 9.48% show limited deep agent reliability, and the v4.3.2 composite replacing τ³-Banking with AutomationBench-AA does not rescue this picture.
- **Reasoning: 52/100.** **Changed from 58.** MMLU-Pro 81.62% and GPQA 75.57% remain solid for a ~3B-active model, but the **new AA Intelligence Index v4.3.2 score of 16** is a real, independent, frontier-relative measurement and it is low — dragged by HLE 10.47%, AA-Omniscience 16.63%, and the 9.48% banking-agent result. Note honestly that the index *definition* changed (Terminal-Bench 2.1 -> 4.0, τ³-Banking -> AutomationBench-AA), so 16 vs the launch-era 24 is not a like-for-like regression; the score is set on the current v4.3.2 number because that is the number a reader can reproduce today.
- **Context window: 78/100.** **Changed from 82.** The underlying checkpoint genuinely supports 1M tokens with AA-LCR 49.19%, which is real. But this *slug* is the Zen free route, and that route is now confirmed at **262K**, not 1M. 262K still clears the 200K bar comfortably, so the score stays high; it just is no longer the near-1M model the previous report implied.
- **Multimodal: 15/100.** Unchanged. Text only, and AA explicitly records no image input support.
- **Coding: 55/100.** Unchanged. SWE-bench Verified 52.80% and multilingual 36.47% provide usable coding evidence; SciCode 31.38% is modest and no LiveCodeBench or DeepSWE row exists.
- **Cost efficiency: 100/100.** Unchanged. All three routes are free (Zen $0, NVIDIA NIM free tier, OpenRouter `:free` at 200 req/day), and the paid checkpoint is cheap anyway at $0.06/$0.20. The one real deduction is the logging/no-confidential-data trial restriction, which is a policy cost rather than a monetary one.
- **Overall Score: 49.6/100.** (48 + 52 + 78 + 15 + 55) / 5 = 248 / 5 = **49.6**, down from 51.6 on 2026-09-24. The move is entirely the two downward corrections above (Reasoning 58 -> 52 on the new AA index, Context 82 -> 78 on the confirmed 262K Zen route). Best fit: a low-cost, very fast execution layer paired with a stronger planner — the 290.7 tokens/s and 0.60 s TTFT make it genuinely good at taking many small agent steps quickly, but it is not a primary reasoner and the free route's 262K window rules out very long single-shot prompts.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of NVIDIA's official model card, blog and training-recipe docs; Artificial Analysis's model page and v4.3.2 comparison surface for the index version, rank, speed, TTFT, parameters and pricing; OpenCode Zen, OpenRouter and Ollama catalogues for the free routes and route-level context. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Live comparison pages that still show Index v4.2 or the launch-era 24 were treated as stale and the v4.3.2 value was used.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
