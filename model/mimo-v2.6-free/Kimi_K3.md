# MiMo V2.6 (Free) — findings by Kimi K3

- Source: Xiaomi MiMo / MiMo-V2.6 (Zen free tier; weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` / `MiMo-V2.6-Pro-RL`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 (Free)
- **Short description:** Xiaomi's latest omni-modal MoE built by scaling RL toward self-improvement (large-scale verifiable-task RL, ~750K trajectories over 6 days of Live RL). 309B total / 15B active (Flash-RL), 1M context, text+image+video+audio in. Released September 21–22, 2026 under MIT; MiMo-V2.6-Pro scores 46 on the AA Intelligence Index, top open-weights model (mimo.mi.com/official announcement).
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free` (free tier, per repo catalog); open weights (HF `huggingface.co/collections/XiaomiMiMo/mimo-v26`, MIT); also MiMo Desktop, MiMo Code, Xiaomi MiMo Open Platform API (`mimo-v2.6-pro` / `mimo-v2.6-flash` / `mimo-v2.6-pro-ultraspeed`), OpenRouter.
- **Release / knowledge:** Released 2026-09-21, official announcement updated 2026-09-22 (mimo.mi.com news); knowledge cutoff not stated on card.
- **IDs:** `opencode/mimo-v2-6-free` (Zen); HF `XiaomiMiMo/MiMo-V2.6-Flash-RL`, `XiaomiMiMo/MiMo-V2.6-Pro-RL`; Xiaomi API `mimo-v2.6-pro` / `mimo-v2.6-flash`.
- **Context window:** 1M tokens (official card: "Max Context Length 1M"; announcement confirms 1M-context RL training); Zen catalog lists 128K total for the free deployment — capped tier.
- **Modalities:** text/image/video/audio in (native omnimodal; Pro can also drive TTS/video-gen toolchains per announcement demos); text out; reasoning (mimo parser); tool calls (mimo tool-call parser); JSON mode via serving stack. MTP/EAGLE speculative decoding.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); open weights (MIT) → self-host; hosted Flash listings from ~$0.14/M input ($0.003 cached) / $0.28/M output (llm-stats.com); Xiaomi MiMo API prices unchanged from V2.5 series (mimo.mi.com).
- **Architecture:** Sparse MoE 309B total / 15B activated (Flash-RL; Pro is 1.02T/42B per codersera.com), 256 routed experts (8 active), 48 layers (39 SWA + 9 GA), 681M MiMo ViT vision encoder, 308M+127M audio encoders (official card).

### Raw benchmarks found (official card table; Flash column unless noted; vendor-run)

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Pro 89.9%; vs Claude Opus 5 89.1, GPT-5.6 Sol 88.8) (HF card)
- Terminal-Bench 4.0: **28.8%** (Pro 34.9%; vs Opus 5 49.0) (HF card)
- Toolathlon-Verified: **73.6%** (Pro 76.9%) (HF card)
- AutomationBench v1.0.6: **52.3%** (Pro 53.1%; both beat Opus 5 50.3 / Sol 45.8) (HF card)
- OSWorld-Verified: **80.8%** (Pro 82.0%) (HF card)
- JobBench: **61.2%** (Pro 62.0%); Agents' Last Exam: **27.6%** (Pro 31.6%) (HF card)
- GDPval-AA 2.1: **1673** for Pro (Flash not measured) (HF card)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46 for MiMo-V2.6-Pro** — top open-weights score, ahead of Kimi K3 (43.6 v4.3) and Qwen3.8 Max (official mimo.mi.com announcement, 2026-09-22); Flash's own AA index: no verified public score found.
- No GPQA/HLE/LCR/CritPt rows on the official card (card focuses on agentic/coding/cyber/visual suites).

Coding:

- DeepSWE v1.1: **67.9%** (Pro 71.9%; ≈ Fable 5 70.0) (HF card); Live-RL training lifted Flash 48.8→65.7 and Pro 58.4→72.6 on DeepSWE v1.1 across the 6-day public run (mimo.mi.com)
- ProgramBench: **26.0%** (Pro 26.5%); MiMo Code Bench: **61.2%** (in-house; Pro 63.2) (HF card)
- SWE-bench (Vals/Verified) / LiveCodeBench / SciCode: no verified public score found (Distill-Qwen-9B sibling: SWE-bench Verified 61.1→66.2 after RL, per announcement)

Cybersecurity (vendor table): CyberGym **95.1%** (Pro 94.0%), MiMo Cyber Bench 77.2%, ExploitGym 6.0%, ExploitBench **25.3%** (Pro 47.9%), SEC Bench Pro 47.5% (HF card).

Long context:

- 1M window by spec; RL training ran at 1M context length (announcement); no MRCR/RULER/GraphWalks public score found.

Multimodal:

- MiMo VisualCoding: **71.5%** (Pro 72.3%; vs Opus 5 70.0) (HF card); audio+video input by architecture; Design Arena: V2.6-Pro at parity with Opus 5 and GPT-5.6 Sol (vendor claim, announcement); no MMMU/CharXiv row on card.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 87.6%, Toolathlon 73.6%, AutomationBench 52.3%, OSWorld-Verified 80.8% across one mixed-RL run is impressive breadth; capped by TB 4.0 28.8% and ALE 27.6%.
- **Reasoning: 64/100.** Pro's AA Index 46 (top open weights) evidences series-level reasoning strength, but the Flash checkpoint itself still lacks public GPQA/HLE/math rows. Capped by checkpoint-specific evidence gap.
- **Context window: 85/100.** Native 1M with agent-trace focus; capped by unmeasured max-window retrieval and Zen free tier's 128K cap.
- **Multimodal: 88/100.** True omnimodal: image + video + audio encoders in one model with VisualCoding 71.5%; text-only output caps it.
- **Coding: 80/100.** DeepSWE 67.9% rivals Fable 5's 70.0 at open weights; capped by ProgramBench 26% and in-house-heavy evidence.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) + MIT open weights; caveat: Zen free deployment caps context at 128K and carries free-tier rate limits — the full 1M window requires the paid Xiaomi MiMo API or self-hosting.
- **Overall Score: 80.2/100.** Mean of the five quality dims (84+64+85+88+80)/5 = 80.2. Best fit: free/cheap omnimodal agentic coding with strong cyber exercises; verify hard-reasoning needs yourself — vendor table omits them for the Flash checkpoint.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (official HF model card incl. vendor evaluation table, mimo.mi.com V2.6 announcement, llm-stats.com, HF hub metadata); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added AA Intelligence Index 46 for Pro (official announcement, top open weights); Live-RL DeepSWE trajectory numbers (Flash 48.8→65.7, Pro 58.4→72.6); hosted Flash rates ~$0.14/$0.28 (llm-stats); Xiaomi API pricing unchanged from V2.5; release pinned to 2026-09-21/22; Cost 97→100 per free-tier band; Reasoning 62→64 on new AA evidence; Overall 79.8→80.2.
- Future sources: add a new file next to this one using the same headings.
