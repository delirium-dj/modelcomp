# MiMo V2.5 Free — findings by Muse Spark 1.2

- Source: Xiaomi (opencode/mimo-v2.5-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native omni-modal 310B MoE (15B active) for agentic coding and multimodal understanding; Free capped Zen tier of MiMo-V2.5 with 1M native context.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions), Xiaomi API `mimo-v2.5`, Hugging Face `XiaomiMiMo/MiMo-V2.5` (MIT)
- **Release / knowledge:** 2026-04-22 (MiMo-V2.5 release); knowledge cutoff 2026-03
- **IDs:** `opencode/mimo-v2.5-free` (Zen Free), `XiaomiMiMo/MiMo-V2.5` (HF)
- **Context window:** 1,048,576 native (1M) / 200K Zen cap / 32K out — verified via Xiaomi blog and HF model card (48T tokens, hybrid SWA 5:1)
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (MOPD/RL agentic); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-24):** Free Zen tier $0/$0; native pay-go $0.14 in / $0.28 out / $0.0028 cached per 1M (Xiaomi pricing page); Token Plan 1× credit
- **Architecture:** 310B total, 15B active MoE (256 routed experts top-8) + 729M ViT + 261M audio encoder, 48 layers, 3 MTP modules (329M); MIT

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.8%** (Hugging Face Eval Results — harborframework/terminal-bench-2.0, XiaomiMiMo/MiMo-V2.5)
- Claw-Eval General: **62.1%** (HF Eval — claw-eval/Claw-Eval General Pass³% N=3 161 tasks, vs multimodal 23.8%, multi-turn 63.2%)
- ResearchClawBench Overall: **16.91%** (HF Eval — InternScience/ResearchClawBench)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (MCP-Atlas not disclosed for 2.5; Pro UltraSpeed variant not this slug)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (no isolated GPQA for 2.5; Kimi K2 line 87.6 cited as peer only)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified isolated index for 2.5** (BenchLM MiMo-V2.5 rank #77/224 provisional 59.12; not vendor-sourced)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **56.1%** (Hugging Face Eval — ScaleAI/SWE-bench_Pro)
- LiveCodeBench: **no verified public score found** (proxied via internal MiMo Coding Bench 71.8 vendor claim — not independent)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (MiMo-V2.5-Pro reports 19% DeepSWE baseline vs Pro UltraSpeed higher; not applicable to 2.5 non-Pro)

Long context:

- 1M native via hybrid SWA/GA (5:1 ratio, 128 window, 6× KV-cache reduction); Zen cap 200K; GraphWalks benchmark image disclosed but no numeric RULER/MRCR at 1M parsed

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.0 65.8 + Claw-Eval 62.1 strong for free tier + ResearchClaw 16.91; capped by missing Tau/GDPval and frontier TB2.1 81-85.
- **Reasoning: 62/100.** No isolated GPQA/HLE disclosed; inferred from agentic 62.1 + SWE 56.1 + 1M architecture; capped heavily by lack of verified reasoning benchmarks.
- **Context window: 94/100.** 1,048,576 native (1M tier) verified; Zen cap 200K practical but native 1M qualifies 95-100 tier, capped at 94 vs proven MRCR 98% retrievals.
- **Multimodal: 88/100.** Native omni-modal (text/image/audio/video in) per HF — broadest tier; Text+image+video+audio → 90-95 tier, capped below 95 pending audio eval numbers.
- **Coding: 71/100.** SWE-Pro 56.1 solid mid-tier + vendor MiMo Coding Bench 71.8 claim; capped by frontier SWE-Pro 62-69 and no DeepSWE/LiveCode verified.
- **Cost efficiency: 100/100.** $0 Free Zen tier (cheaper than $0.14 native; training-data consent caveat) — max per methodology.
- **Overall Score: 79/100.** Mean of five non-cost dims (80+62+94+88+71)/5=79.0 → 79; best free omni-modal agent with 1M context when frontier coding not required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Xiaomi mimo.xiaomi.com blog 2026-04-22, Hugging Face XiaomiMiMo/MiMo-V2.5 eval results, platform docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
