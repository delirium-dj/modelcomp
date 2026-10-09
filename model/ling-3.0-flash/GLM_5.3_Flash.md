# Ling 3.0 Flash — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-3.0-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash (`Ling-3.0-flash`)
- **Short description:** InclusionAI's (Ant Group's AGI lab) next-generation native hybrid-reasoning MoE — 124B total / 5.1B active — engineered for speed, compute efficiency, and production agentic workflows (coding, general, deep-research agents). Matches or outperforms its 1T-class predecessor Ring-2.6-1T on key benchmarks. Superseded by Ling 3.1 Flash (AA now benchmarks only the default 10K-input workload).
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ling-3.0-flash`) and ModelScope; self-hosted via SGLang (MTP/NEXTN, 256K YaRN) or vLLM; hosted on Novita AI (HF Inference Provider) and OpenRouter — including a Free route `openrouter.ai/inclusionai/ling-3.0-flash:free`. Chat Completions API; runs Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw.
- **Release / knowledge:** 2026-08-04 release (AA); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-flash` (self-host), `novita-ai/...` (HF provider), `openrouter/inclusionai/ling-3.0-flash` + `:free` Free route on OpenRouter (no Free ID on OpenCode Zen verified).
- **Context window:** 262,144 total (AA/LLM trackers list 262K; HF card gives the 8K → 32K → 256K context training schedule, i.e. 256K native via YaRN) — verified against both sources; max output 32K used in official SWE-bench evals.
- **Modalities:** text in, text out; reasoning yes (thinking mode enabled by default, `enable_thinking: false` to disable); tool calls yes (`ling3` tool-call parser, auto tool choice); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-09):** $0.075 in / $0.22 out per 1M (AA, InclusionAI API; 80% cache discount, blended ~$0.05/1M). Paid, plus a time-limited `$0` Free route on OpenRouter (not OpenCode Zen).
- **Architecture:** 124B total / 5.1B active MoE; native hybrid-linear attention (35 KDA + 7 Gated MLA layers, 5:1 stacking, fine-grained diagonal gating), 512 routed + 1 shared experts (8 activated), 157,184 vocab; 10,000+ interactive training environments; SGLang HiCache + Mooncake hierarchical caching (TTFT reduced 60–80% on long inputs); MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (AA protocol, Terminus 2 harness): charted on the official HF card — exact value not extractable — no verified numeric public score found
- Tau3-banking-AA / MCP-Atlas / SkillsBench / GDPval v2-AA / WideSearch / Draco / BrowseComp / MiniAppBench / AntSWEBench: charted on the official HF card — exact values not extractable — no verified numeric public score found
- Artificial Analysis Intelligence Index: **20 / #3 of 65 in class** (AA model page; well above the small-open-weight median of 8; only the default 10K-input workload is still benchmarked)

Reasoning / knowledge:

- AIME 2026: **93.2%** (official HF eval results, MathArena)
- HMMT Feb 2026: **87.0%** (official HF eval results, MathArena)
- HLE: **22.7%** (official HF eval results)
- GPQA Diamond: no verified public score found
- CritPt / LCR: no verified public score found

Coding:

- SWE-bench Pro: **56.6%** (official HF eval results; OpenHands harness, 256K context, 32K output)
- SWE-bench Multilingual: **72.4%** (official HF eval results)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (AA-LCR/MRCR/RULER not published; 256K YaRN is the design claim)

Speed: 332.1 output tokens/s (#1 of 65 in class, AA, InclusionAI API) — class-defying; TTFT 2.50s. Very verbose: 260M output tokens across the Intelligence Index run.

### Normalized scores (1–100)

- **Tool use: 60/100.** Provisional — the official card reports strong Tau3-banking-AA, MCP-Atlas, SkillsBench, and GDPval v2-AA performance but publishes the numbers only in chart images (not extractable); the closest verified proxy is SWE-bench Pro 56.6% under an OpenHands agent harness, plus an AA class rank of #3/65.
- **Reasoning: 65/100.** AIME 2026 93.2% and HMMT 87.0% are strong math signals, but HLE 22.7% is well below the 40% frontier reference, no GPQA number is public, and Intelligence Index 20 (despite a high in-class rank) sits in the mid-band — capped below frontier.
- **Context window: 72/100.** 262K total / 32K max output (256K YaRN training schedule) sits inside the 200K–500K band (200K ≈ 70); no MRCR/RULER/LCR retrieval benchmark is published to push it higher.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA — no image/audio/video support.
- **Coding: 68/100.** SWE-bench Multilingual 72.4% and SWE-bench Pro 56.6% are solid mid-band results below the 90–100 frontier references (DeepSWE 74%+, SciCode 55%+ with stronger companions); missing SWE-bench Verified/LiveCodeBench numbers cap the score.
- **Cost efficiency: 97/100.** $0.075/$0.22 per 1M sits at the ~$0.10/$0.20 ≈ 97–99 reference with an 80% cache discount and ~$0.05/1M blended rate — among the cheapest hosted models benchmarked by AA. Paid, not $0 — not counted toward Overall.
- **Overall Score: 56/100.** Mean of the five quality dims (60 + 65 + 72 + 15 + 68) / 5 = 56.0 → 56. Best-fit recommendation: ultra-fast, ultra-cheap workhorse for high-volume agentic coding and text workflows; escalate to a frontier model for deep reasoning, multimodal, or terminal-heavy tasks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (official Hugging Face model card and eval results, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
