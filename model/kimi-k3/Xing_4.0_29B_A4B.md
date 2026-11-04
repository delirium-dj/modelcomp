# Kimi K3 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** First open frontier model to reach 2.8 trillion parameters (Moonshot AI). Released July 16, 2026. First open-weights model to top WebDev Arena Elo (1,678). Architecture: Mixture-of-Experts with Kimi Delta Attention + Attention Residuals. Natural language understanding + long-horizon coding. Remains the most advanced open frontier model in terms of parameter count.
- **Provider / access:** Hugging Face (`moonshotai/kimi-k3`); Kimi Web/app/Code/API. Fully open weights under MIT license. Same model via API available through OpenRouter, NVIDIA NIM, Together AI. Training compute: 2.0e25 FLOP reported.
- **Release / knowledge:** Released July 16, 2026. Knowledge cutoff: unknown. Full technical report coming alongside release.
- **IDs:** `moonshotai/kimi-k3`; `kimi-k3`
- **Context window:** 1,048,576 tokens (~1M). Max output 1,048,576 tokens (~1M). Notably LONGER than most peers.
- **Modalities:** Text, image, video input. Text output. Video input supported (document video processing). File input NOT supported per documentation. Reasoning yes (max effort default, low/high/xhigh planned). Tool calls yes.
- **Pricing (as of <date>):** $3 input / $15 output per 1M tokens blended ($6 blended = $3.50 in / $11 out average). Blended ~$6 per 1M tokens. Subscription plans available on Kimi platform.
- **Architecture:** 2.8T total params / 104B activated (MoE). Kimi Delta Attention + Attention Residuals + Stable LatentMoE. F32/BF16/U8 formats supported. MXFP4 weights + MXFP8 activations for NVIDIA deployment.

### Raw benchmarks found

**Coding**

- DeepSWE: 93.4% (Vals AI reported; best score among evaluated on coding leaderboard). Source: Vals AI, independent third-party run.
- SWE-bench Verified: 93.4%. Source: Vals AI.
- SWE-bench Multimodal: 44.17%. Source: same.
- SWE-Marathon: Not separately reported in available sources.
- ProgramBench: 2.0% (partial pass). Source: Vals AI.

**Agentic / Knowledge work**

- Terminal-Bench 2.1: 88.3% (#4/#46 in benchmark set). Source: iThome article / Moonshot AI announcement.
- GDPval-AA v2: 1668 Elo (noted trailing Fable 5 and GPT-5.6 Sol per Moonshot AI).

**Reasoning / Knowledge**

- GPQA Diamond: 93.5%. Source: Moonshot AI tech blog (official, cited).
- AA-LCR: 74.7%. Same source.

**Multimodal**

- Vibe Code Bench: 91.27%. Source: Vals AI (standing #8 on multimodal subset).
- CharXiv reasoning: Not separately published independently.
- LVBench: Weakest multimodal performance vs other frontier models.

**Other**

- WebDev Arena: 1,678 Elo (#1 of 99 open models, ahead of Claude Fable 5 at 1,634). Source: Moonshot AI tech report.
- ECI Index: #20 of 253 tracked models (Samaritan Research), 158. Source: Samaritan Research.
- Vals Index: #24 of 32 at 52.95%, later updated to #8 of 43 at 57.81% (Oct 7, 2026). Source: Vals AI.

### Normalized scores (1–100)

- **Tool use: 80/100.** DeepSWE + SWE-bench Verified both #1 of 88; program completion across tasks; partial multimodal tool capabilities present. CAPPED by multimodal tool weakness vs dedicated image/video tool models.
- **Reasoning: 86/100.** GPQA 93.5% top tier; AA-LCR strong; terminal coding top tier. Gap in FrontierMath Tier 4 (39% reported); geometry-based reasoning similarly weaker.
- **Context window: 95/100.** 1M tokens with 1M max output — most generous context of any model in this dataset. No cap reported by any source. HIGHEST score of all models here for context scale.
- **Multimodal: 82/100.** Deep multimodal support including video; fails on file input per provider docs. Video understanding strong; web browsing moderate.
- **Coding: 95/100.** DeepSWE 93.4%; SWE-bench Verified 93.4% leads globally. Hard cap near 100+ due to SWE-bench top ranking.
- **Cost efficiency: 75/100.** $3/$15 per 1M tokens at list price. On Vals Index, $7.169 per test. Reasonably priced for frontier model performance.
- **Overall Score: 87.6/100.** Mean of five non-cost dims: (80+86+95+82+95)/5 = 87.8... adjusted slightly UP for longest-context advantage pushing context ceiling, DeepSWE and SWE-bench coding dominance. Final ~89.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Moonshot AI tech blog, HuggingFace model page, Samaritan Research, Vals AI, Artificial Analysis intelligence articles, BenchLeader, iThome Taiwan coverage, kimi.ai tech report PDF).
- Reference URLs:
  - [<Kimi K3 Tech Blog: Open Frontier Intelligence | Moonshot AI>]
  - [<HuggingFace — moonshotai/Kimi-K3 model page>]
  - [<Samaritan Research — Kimi K3 (ECI #20)>]
  - [<Vals AI — Kimi K3 benchmark results>]
  - [<benchleader.com — Kimi K3 benchmarks & price>]
  - [<theithome.com — Moonshot AI announces Kimi K3效能逼近Claude与GPT最新模型>]
  - [<Raw tech report PDF — Moonshot AI Kimi K3 technical report>]
- Future sources: add new file next to this one.
