# MiMo V2.6 Free — findings by Muse Spark 1.2

- Source: Xiaomi (opencode/mimo-v2-6-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's cost-optimized omni-modal Flash model (310B/15B active) from the V2.6 generation; balances frontier intelligence with 20× throughput vs Pro, Free Zen tier.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free` (Chat Completions), Xiaomi API `mimo-v2.6-flash`, Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash` (MIT)
- **Release / knowledge:** 2026-09-22 (MiMo-V2.6 series); knowledge cutoff 2026-07
- **IDs:** `opencode/mimo-v2-6-free` (Zen), `XiaomiMiMo/MiMo-V2.6-Flash` (HF)
- **Context window:** 262,144 total (256K) with 1M RoPE-extended in Pro; Flash docs show 256K served, 1M research context — verified via Xiaomi V2.6 docs
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (RL-trained Flash-RL); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-24):** Free Zen tier $0/$0; native Flash ~$0.14/$0.28 per 1M (V2.5 Flash proxy, V2.6 Flash list not yet priced separately) — Token Plan 1×
- **Architecture:** 310B total, 15B active MoE (256 experts top-8, hybrid SWA 5:1, 3 MTP layers); MIT; 1T Pro sibling 42B active

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (LLM Stats / Xiaomi — MiMo-V2.6-Flash vs North Mini Code comparison)
- Toolathlon-Verified: **73.6%** (same LLM Stats comparison)
- OSWorld-Verified: **80.8%** (same — computer-use)
- CyberGym: **95.1%** (same — cyber)
- MiMo Cyber Bench: **77.2%** (same)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found** (not disclosed for 2.6 Flash)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified AA Intelligence for Flash found** (BenchLM MiMo-V2.6-Flash 14 rows, no overall; sibling Pro Intelligence 46)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found for Flash** (Pro DeepSWE 65.97% not applicable; Flash coding proxied via 87.6 TB)
- LiveCodeBench: **no verified public score found** (proxy: LCB v6 not disclosed for Flash)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified isolated DeepSWE for Flash found** (Pro 65.97% is Pro-RL)

Long context:

- 256K served (Flash), 1M research context via RoPE; no MRCR/RULER at 256K disclosed beyond GraphWalks v2.5 proxy

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.6 + Toolathlon 73.6 + OSWorld 80.8 + CyberGym 95.1 strong computer-use/cyber; capped by frontier 89-90 TB and missing Tau/GDPval.
- **Reasoning: 66/100.** Inferred from Flash RL + Pro 46 Intelligence + agentic 80+; no GPQA/HLE isolated, capped below 75.
- **Context window: 75/100.** 262,144 total (256K tier per methodology ~72-75); Pro 1M not counted for Flash served, capped below 1M tier.
- **Multimodal: 88/100.** Full omni-modal (text/image/audio/video in) per Xiaomi V2.6 series; Flash retains ViT/audio encoders.
- **Coding: 73/100.** Proxy via TB2.1 87.6 strong coding-agent but no SWE-Pro/DeepSWE verified for Flash, capped by Pro 65.97 not counted.
- **Cost efficiency: 100/100.** $0 Free Zen tier (max per methodology; native ~$0.14/$0.28 still cheaper than frontier).
- **Overall Score: 78/100.** Mean of five non-cost dims (86+66+75+88+73)/5=77.6 → 78; best free high-throughput omni-modal Flash when Pro not needed.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Xiaomi mimo.xiaomi.com V2.6 2026-09-22, LLM Stats comparison 2026-09-22, BenchLM MiMo-V2.6-Flash, MindStudio/Vantaige); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
