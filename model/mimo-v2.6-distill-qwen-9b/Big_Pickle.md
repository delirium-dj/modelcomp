# MiMo-V2.6-Distill-Qwen-9B — findings by Big Pickle

- Source: Xiaomi MiMo/MiMo-V2.6-Distill-Qwen-9B (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi MiMo's 9B open-weight agentic model, produced by supervised fine-tuning Qwen3.5-9B on MiMo-generated data and released as a starting point for open research into agentic reinforcement learning. Not an alias: a separate 9B checkpoint, not a quantized MiMo-V2.6-Pro or Flash. Targets four domains — coding, general agent tasks, visual coding and cybersecurity.
- **Provider / access:** Self-hosted only — Hugging Face weights `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` served via vLLM or SGLang (OpenAI-compatible `/v1/chat/completions`, `enable_thinking` via `chat_template_kwargs`, reasoning returned in `reasoning_content`). GGUF quantizations published by ggml-org from 2026-09-21 for llama.cpp / Ollama / LM Studio; MLX ports for Apple silicon. No inference provider currently deploys it on the Hub. Note: this folder's `meta.json` id `opencode/mimo-v2.6-distill-qwen-9b` was not found in any public catalogue — the verified id is the Hugging Face path above; flagged for the orchestrator, not edited here.
- **Release / knowledge:** released with the MiMo-V2.6 series, 2026-09-21/22; knowledge cutoff not published.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (Hugging Face); `mimo-v2.6-distill-qwen-9b` (vast.ai / Vast library name).
- **Context window:** 262,144 tokens, listed by Vast.ai. Verified from the provider catalogue rather than a measured retrieval benchmark — no long-context result has been published for this checkpoint.
- **Modalities:** image + text in, text out (pipeline tag `image-text-to-text`, `AutoModelForMultimodalLM`); reasoning toggleable via `enable_thinking`; tool calls and agentic orchestration are the core training target; JSON mode via the MiMo v2.6 chat template.
- **Pricing (as of 2026-09-29):** no per-token price — MIT-licensed weights, self-hosted. Reference hardware is a single H100 SXM per the Vast.ai listing; quantized builds (Q4_K_M, Q6_K, MLX 4-bit/8-bit) run far smaller. Community measurements report ~64 tok/s peak for a Q6_K build on one GPU.
- **Architecture:** open weights, MIT license. ~9.4B dense parameters (HF lists 9B), BF16, derived from `Qwen/Qwen3.5-9B` (itself finetuned from `Qwen3.5-9B-Base`). Trained on a 77.4B-token SFT mixture (27.2B loss-bearing): code 23.2B, general 22.0B, visual 21.2B, cyber 11.0B.

### Raw benchmarks found

All figures below are from the MiMo-V2.6 technical report as published on the official Hugging Face model card, comparing the released SFT checkpoint against its Qwen3.5-9B base.

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** avg@1 (Qwen3.5-9B: 27.0%). Confirmed by the Hub eval-result entry on `harborframework/terminal-bench-2.1`.
- Toolathlon-Verified: **35.2%** avg@1 (base 25.9%). Confirmed by the Hub eval-result entry on `hkust-nlp/Toolathlon`.
- AutomationBench v1.0.6: **30.3%** avg@1 (base 5.0%).
- JobBench: **18.3%** avg@1 (base 2.6%).
- OfficeQA: **19.5%** avg@1 (base 9.0%).
- MiMo Cyber (mini, internal set): **31.3%** avg@1 (base 5.7%).
- Tau3-Banking / Tau2-Bench: **no verified public score found.**
- GDPval-AA: **no verified public score found.**
- Claw-Eval / ClawProBench: **no verified public score found.**

Reasoning / knowledge:

- MiMo General (mini, internal set): **62.2%** avg@1 (base 28.5%) — an internal Xiaomi evaluation set, not a public benchmark.
- GPQA Diamond: **no verified public score found.**
- HLE: **no verified public score found.**
- LCR / MLCR: **no verified public score found.**
- CritPt: **no verified public score found.**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** — the model is not tracked by either aggregator.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found.**

Coding:

- SWE-bench Verified: **61.1%** avg@3 (base 60.0%). Confirmed by the Hub eval-result entry on `SWE-bench/SWE-bench_Verified`.
- SWE-bench Pro: **44.6%** avg@3 (base 32.0%). Confirmed by the Hub eval-result entry on `ScaleAI/SWE-bench_Pro`.
- MiMo Code (mini, internal set): **51.6%** avg@3 (base 19.5%).
- MiMo Visual Coding (mini, internal set): **64.0%** avg@1 (base 61.7%).
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found.**

Long context:

- No long-context retrieval result published. The 262,144-token figure is a catalogue spec only; there is no MRCR, RULER or GraphWalks measurement for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 42/100.** Terminal-Bench 2.1 at 37.1%, Toolathlon-Verified at 35.2% and AutomationBench at 30.3% put a real agentic harness in reach, but every figure sits below the methodology's mid band (TB2.1 45–60% → 50–70), and there is no Tau2/Tau3, GDPval or Claw-Eval number at all. A 37.1% terminal score is usable supervised-loop territory, not autonomous work.
- **Reasoning: 40/100.** Zero public reasoning benchmarks exist for this checkpoint — no GPQA Diamond, HLE, LCR, CritPt or Intelligence Index. The only reasoning-adjacent datum is Xiaomi's internal MiMo General (mini) set at 62.2%, which cannot be cross-compared. Scored as a modest default for a 9B SFT model whose only verified wins are on internal sets, not inflated by internal numbers.
- **Context window: 70/100.** 262,144 tokens places it at the 200K anchor of the 200K–500K band. It does not rise above the anchor because no retrieval benchmark exists, so the window is a spec rather than a measured capability.
- **Multimodal: 62/100.** Image + text input with text output is the "+image in" band (60–70), anchored by MiMo Visual Coding at 64.0% — solid visual coding, but OfficeQA at 19.5% shows document understanding is weak. No audio or video input, no non-text output.
- **Coding: 68/100.** SWE-bench Verified 61.1% avg@3 and SWE-bench Pro 44.6% avg@3 are genuinely strong for a 9B open-weights model, and the SWE-Pro jump from 32.0% to 44.6% over the base shows the distillation worked. Held below the mid-coding band ceiling because the coding evidence is two SWE variants at avg@3 (multi-attempt, which flatters the number — Epoch AI currently flags SWE-bench Verified scoring as flawed), there is no LiveCodeBench, SciCode or Vibe Code Bench figure, and the harness configuration is not independently reproduced.
- **Cost efficiency: 100/100.** MIT-licensed weights with no per-token charge at all; quantized builds run on a single GPU. Nothing cheaper exists, and the only caveat is that someone has to own the hardware.
- **Overall Score: 56/100.** (42 + 40 + 70 + 62 + 68) / 5 = 56.4 → 56. Best fit: a free, self-hosted 9B agentic workhorse for local tool loops, visual coding and cyber-sandbox experiments, or as a cheap SFT starting point for agentic RL research — not a frontier planner, and its evidence base is thinner than its leaderboard-friendly SWE numbers suggest.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-29
- Method: public internet research (official Xiaomi MiMo Hugging Face model card and its technical-report evaluation table, Hub eval-result leaderboard entries for SWE-bench Verified / SWE-bench Pro / Terminal-Bench 2.1 / Toolathlon, MiMo-V2.6 series release notes, GGUF and MLX distribution notes, Vast.ai hardware listing, community local throughput measurement). Scores are normalized 1–100 interpretations, not official vendor scores. Internal Xiaomi evaluation sets (MiMo Code / Cyber / General / Visual Coding mini) are labelled as internal and never treated as public benchmark evidence.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_MiMo_V2.6_Distill_9B.md`, using the same headings.
