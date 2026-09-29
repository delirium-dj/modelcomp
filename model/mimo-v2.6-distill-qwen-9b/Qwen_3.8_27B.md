# MiMo V2.6 Distill Qwen 9B — findings by Qwen 3.8 27B

- Source: Xiaomi MiMo (`opencode/mimo-v2.6-distill-qwen-9b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B (HF: `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- **Short description:** Xiaomi's 9B agentic SFT checkpoint: supervised fine-tuning of Qwen3.5-9B on MiMo-generated data (77.4B-token mixture spanning code, cyber, general, visual). Released as a starting point for open agentic RL research; covers coding, general agent tasks, visual coding, and cybersecurity.
- **Provider / access:** Open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, not deployed by any HF inference provider as of the fetched card); listed in meta.json as OpenCode Zen ID `opencode/mimo-v2.6-distill-qwen-9b` — the ID was not present in the Zen docs model list or `zen/v1/models` fetched 2026-09-29 (current Zen free MiMo entry is `mimo-v2.6-flash-free`).
- **Release / knowledge:** MiMo-V2.6 series (2026); HF card updated ~2026-09-21 ("8 days ago" at fetch time); exact release date and knowledge cutoff not stated on the fetched pages.
- **IDs:** `opencode/mimo-v2.6-distill-qwen-9b` (meta.json); `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (Hugging Face).
- **Context window:** 128K total (meta.json; the fetched HF card does not state a context figure explicitly).
- **Modalities:** meta.json says text in/out; the HF card labels the model Image-Text-to-Text with image-input support (image+text in, text out); reasoning via chat-template `enable_thinking`.
- **Pricing (as of 2026-09-29):** "Standard pricing" per meta.json — no verified API pricing found on any page fetched this session; MIT-licensed open weights are free to self-host.
- **Architecture:** 9B dense SFT of Qwen3.5-9B (BF16), MIT license, trained on 77.4B SFT tokens (27.2B loss-bearing).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B**, per MiMo-V2.6 technical report): **37.1%** avg@1 (base Qwen3.5-9B: 27.0%)
- Toolathlon-Verified (same source): **35.2%** avg@1 (base 25.9%)
- AutomationBench v1.0.6 (same source): **30.3%** avg@1 (base 5.0)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MRCR: no verified public score found
- CritPt: no verified public score found
- AA Intelligence Index / BenchLM overall: no verified public score found (benchlm.ai, benchmarklist.com and artificialanalysis.ai all return 404 for this model)
- OfficeQA (general agent) (**huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B**): **19.5%** avg@1 (base 9.0%)
- JobBench (general agent, same source): **18.3%** avg@1 (base 2.6%)

Coding:

- SWE-bench Verified (same source): **61.1%** avg@3 (base 60.0%)
- SWE-bench Pro (same source): **44.6%** avg@3 (base 32.0%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- MiMo Code (mini)† (same source, internal set): **51.6%** avg@3
- MiMo Cyber (mini)† (same source, internal set): **31.3%** avg@3

Long context:

- No long-context retrieval (MRCR/RULER) numbers published on the fetched pages.

### Normalized scores (1–100)

- **Tool use: 40/100.** TB2.1 37.1%, Toolathlon 35.2%, AutomationBench 30.3% all sit below the mid band (TB2.1 45–60% → 50–70); large gains over the base Qwen3.5-9B but still entry-level agent performance.
- **Reasoning: 40/100.** No public GPQA/HLE/AA-Index found; low OfficeQA/JobBench general-task scores (18–19%) on the fetched card cap this at a provisional low score.
- **Context window: 52/100.** 128K total per meta.json (vendor card silent) — 100K–200K tier = 50–64.
- **Multimodal: 62/100.** Image+text in / text out per the HF card, with visual-coding focus (internal MiMo Visual Coding 64.0%); no video/PDF/audio in, text out only.
- **Coding: 58/100.** SWE-bench Verified 61.1% (avg@3) and SWE-bench Pro 44.6% are respectable for a 9B model, but below frontier references and with no LiveCodeBench/SciCode numbers to lift it.
- **Cost efficiency: 60/100.** No verified API pricing found on fetched pages (meta.json only says "Standard pricing"); MIT open weights allow free local runs — provisional middle score.
- **Overall Score: 50.4/100.** Mean of Tool 40, Reasoning 40, Context 52, Multimodal 62, Coding 58; best fit: cheap local/distill base for agentic RL research and light visual-coding tasks.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B, huggingface.co/XiaomiMiMo, opencode.ai/docs/zen, benchlm.ai / benchmarklist.com / artificialanalysis.ai 404 checks, models.dev; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
