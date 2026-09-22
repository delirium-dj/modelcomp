# GPT-5.6 Terra — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced everyday-work model (2026-07-09) between flagship Sol and efficient Luna, 1.05M context, competitive with GPT-5.5 at ~half cost.
- **Provider / access:** OpenAI API `gpt-5.6-terra`, ChatGPT, Codex, AWS
- **Release / knowledge:** 2026-07-09 GA (preview 2026-06-26); knowledge cutoff 2026-02-16
- **IDs:** `openai/gpt-5.6-terra` (no Zen Free ID — paid only)
- **Context window:** 1,050,000 total (922K max input / 128K max output) — verified via OpenAI API docs
- **Modalities:** Text, image in; text out; reasoning yes (effort none/low/medium/high/xhigh/max); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $2.00 in / $12.00 out per 1M; cached $0.20 / 1M (post 2026-07-30 cut 20%); blended $4.50; ultra mode with subagents
- **Architecture:** Proprietary (GPT-5.6 series)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.8%** (Meta / musecodes.io chart for Terra in Codex vs Opus 5 86.7%, Muse 1.2 82.9%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- ExploitBench: **strong improvement with reasoning, competitive with Mythos Preview at ~1/3 tokens** (OpenAI preview — Sol competitive; Terra inherits trend)
- ExploitGym: **all tiers improve with reasoning** (OpenAI preview, Berkeley collab)
- Artificial Analysis Intelligence Index: **55.0 (max)** (aiapicost via AA)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- FrontierMath Tier 4: **no verified public score found for Terra** (Sol 98%)
- ARC-AGI-3: **no verified public score found for Terra**
- Coding Index (AA): **76.7** (aiapicost via AA — strongest AA coding index for Terra)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found for Terra** (Mashable: Terra ≈ GPT-5.5 performance)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- OpenAI tier positioning: **Terra just above Fable 5 on Coding Agent Index, Luna outperforms Opus 4.8** (OpenAI GA post — 80 for Sol max, Terra ~75)
- Speed: **130 tok/s output, TTFT 162s** (aiapicost via AA)

Long context:

- 1,050,000 context (922K max input); no MRCR/RULER disclosed; designed for everyday multi-step workflows

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 81.8% solid + AA Intelligence 55 + exploit improvements; capped by missing GDPval/Tau3 and trailing Opus 5.
- **Reasoning: 82/100.** AA 55 Intelligence + Coding 76.7 + GPT-5.5-competitive reasoning claim; capped by no FrontierMath/ARC for Terra tier.
- **Context window: 96/100.** 1.05M / 128K; tier 95-100 but capped below 100 without MRCR proof.
- **Multimodal: 50/100.** Text/image in only; lacks audio/video/PDF broadening; image qualifies above text-only 15.
- **Coding: 84/100.** AA Coding 76.7 + TB 81.8 + positioning vs Fable 5/Opus 4.8; capped by no direct SWE-bench number for Terra.
- **Cost efficiency: 68/100.** $2/$12 ~60% cheaper than Sol $5/$30, quarter-cost vs Opus; still paid vs free; Luna cheaper.
- **Overall Score: 79/100.** Mean of five non-cost dims (84+82+96+50+84)/5=79.2 → 79; best-fit for balanced everyday coding/reasoning where Sol overkill.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI GPT-5.6 posts 2026-07-09/30, OpenAI API docs, aiapicost/AA, musecodes.io, Mashable); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
