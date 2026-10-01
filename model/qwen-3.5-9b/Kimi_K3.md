# Qwen3.5-9B — findings by Kimi K3

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Alibaba's flagship small dense model in the Qwen3.5 generation — a natively multimodal (vision-language) 9B dense model with hybrid linear attention, positioned as the largest of the edge/laptop-sized Qwen3.5 releases (0.8B/2B/4B/9B). Artificial Analysis rated it the most intelligent sub-10B model at launch and the most intelligent multimodal model under 15B (per llm-releases.com).
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-9B`, Apache-2.0) and ModelScope; servable via vLLM/SGLang/KTransformers/HF Transformers; hosted via Alibaba Cloud Model Studio (DashScope `Qwen3.5-9B`, OpenAI-compatible) and third-party inference providers. No Zen Free ID verified.
- **Release / knowledge:** Released 2026-03-02 (small-family drop; flagship Qwen3.5-397B-A17B on 2026-02-16). Knowledge cutoff not disclosed on the card.
- **IDs:** `Qwen/Qwen3.5-9B` (HF), `Qwen3.5-9B` (Model Studio). No standalone Zen ID verified.
- **Context window:** 262,144 tokens native; extensible up to ~1,010,000 tokens via YaRN RoPE scaling (config documented on the HF card).
- **Modalities:** Text + image + video in, text out (native VLM, early-fusion multimodal training; hour-scale video sampling supported via preprocessor config). Unified hybrid thinking/non-thinking mode (default thinking; no `/think` soft switch). Tool calling via `qwen3_coder` parser; JSON/structured output via standard prompting.
- **Pricing (as of 2026-10-01):** Open weights (Apache-2.0) — self-host cost only; BF16 native, ~6 GB in 4-bit (consumer-laptop reach per llm-releases.com). Heavy reasoning token usage noted (~260M output tokens to run the AA Intelligence Index). No official per-token price found for hosted endpoints.
- **Architecture:** Dense 9B (≈10B with vision encoder), 32 layers, hidden 4096, hybrid layout 8 × (3 × Gated DeltaNet + 1 × Gated Attention), MTP trained, vocab 248,320. Weights BF16 (+F32 parts). Apache-2.0.

### Raw benchmarks found

Agent / tool use (HF model card, Qwen Team vendor harness):

- TAU2-Bench: **79.1** (official setup + airline-domain Opus-4.5-card fixes)
- BFCL-V4: **66.1**
- OSWorld-Verified (visual agent): **41.8**; AndroidWorld: **57.8**; ScreenSpot Pro: **65.2**
- VITA-Bench: **29.8**; DeepPlanning: **18.0**
- TIR-Bench (tool calling): **45.6 w/ CI**; V\* **90.1 w/ CI**
- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.7** (HF card; also registered in HF eval results)
- MMLU-Pro: **82.5**; MMLU-Redux: **91.1**; SuperGPQA: **58.2**; C-Eval: **88.2**
- HMMT Feb 25: **83.2**; HMMT Nov 25: **82.9** (competition math)
- IFEval: **91.5**; IFBench: **64.5**; MultiChallenge: **54.5**
- Omniscience / hallucination rate: no verified public score found (vendor table covers SimpleVQA 51.2, HallusionBench 69.3 as proxies)
- HLE / CritPt: no verified public score found

Coding:

- LiveCodeBench v6: **65.6**
- OJBench: **29.2**
- SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found (sub-10B models are typically not run on them)

Long context:

- AA-LCR: **63.0**; LongBench v2: **55.2** (262K native window; 1M only via YaRN extrapolation)

Multimodal highlights (vision-language table): MMMU **78.4**, MMMU-Pro **70.1**, MathVision **78.9**, MathVista(mini) **85.7**, OmniDocBench1.5 **87.7**, OCRBench **89.2**, VideoMME(w sub.) **84.5**, MLVU **84.4**, LVBench **70.0**.

### Normalized scores (1–100)

- **Tool use: 68/100.** TAU2-Bench 79.1 is genuinely strong in absolute terms and OSWorld-Verified 41.8 / AndroidWorld 57.8 show real agents beyond text tools; capped by frontier-distance (DeepPlanning 18.0, no Terminal-Bench-class evidence) and 9B-class reliability ceilings.
- **Reasoning: 72/100.** GPQA Diamond 81.7 and HMMT ~83 are startling for 9B — but vendor-table numbers, achieved with very heavy reasoning-token budgets (~260M tokens per AA Index run), so practical deployed reasoning is capped well below frontier reasoning models.
- **Context window: 70/100.** 262K native is a solid tier-2 window and AA-LCR 63.0 / LongBench v2 55.2 give real retrieval evidence; 1M is YaRN extrapolation only, static-scaling caveat documented by the vendor itself.
- **Multimodal: 65/100.** Image + video in / text out with strong measured quality (MMMU 78.4, MMMU-Pro 70.1, LVBench 70.0, OmniDocBench 87.7); capped by text-only output and no audio understanding.
- **Coding: 58/100.** LiveCodeBench v6 65.6 is credible for the size class, but OJBench 29.2 and the absence of any SWE-bench evidence keep it clearly below coding-specialist models.
- **Cost efficiency: 92/100.** Apache-2.0 open weights running in ~6 GB at 4-bit put the marginal cost near zero; capped from 100 by the heavy reasoning-token consumption inflating real serving cost per answer.
- **Overall Score: 66.6/100.** Half-up mean of (68+72+70+65+58)/5 = 66.6 → 67; adjusted to 65 — recomputing: (68+72+70+65+58)=333, /5=66.6 → **67**. Best fit: on-device / cheap self-hosted multimodal assistant and agent prototyping where sub-10B footprint, vision+video input, and 262K context matter more than frontier coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (huggingface.co/Qwen/Qwen3.5-9B model card incl. full vendor benchmark tables, llm-releases.com, ai-tldr.dev, theopenweights.com, qwen.ai blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
