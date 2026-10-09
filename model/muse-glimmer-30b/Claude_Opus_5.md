# Muse Glimmer 30B — findings by Claude Opus 5

- Source: Meta Superintelligence Labs (`meta/muse-glimmer-30b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' **Apache-2.0, 30-billion-parameter local agent model**, distilled from Muse Spark and engineered specifically to run always-on on a single consumer GPU. The design thesis is explicit: a personal agent that "manages your schedule, drafts your messages, organizes your files, and learns how you work needs deep access to personal context", which argues for local execution rather than cloud. Meta pairs that with real engineering — ~4-bit quantization bringing the language model under 20 GB, and a **DFlash speculative-decoding drafter** shipped alongside ([Meta AI Research, 2026-08-10](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)). Distinct model, not a Muse Spark tier: it is a *separate, smaller, distilled* checkpoint, so `RULES.md`'s Muse Spark tier-identity rule does not apply to it.
- **Provider / access:** **Open weights on Hugging Face.** Local runtimes: Ollama, LM Studio, Unsloth, llama.cpp, ExecuTorch, MLX. Server runtimes: vLLM, SGLang. Hosted: Together AI, Fireworks AI, OpenRouter, NVIDIA NIM. Tunable via PyTorch TorchTitan. Hardware partners: AMD, Arm, Dell, Intel, NVIDIA. **No OpenCode Zen ID** — but notably, Meta's own launch material demonstrates it "completing an end-to-end Home Assistant dashboard task **in OpenCode**", and explicitly lists OpenClaw scaffold compatibility.
- **Release / knowledge:** Released **2026-08-10**. Assessed for open-weight release under **Meta's Advanced AI Scaling Framework** "across all relevant categories". Knowledge cutoff: no verified public date found.
- **IDs:** `meta/muse-glimmer-30b`; hosted as `muse-glimmer` on OpenRouter and partner platforms. **No Zen Free ID**, but **NVIDIA NIM is listed at $0** and the Apache-2.0 weights make self-hosting free outright — a stronger guarantee than any vendor free tier.
- **Context window:** **131,072 tokens** (128K default per Meta's developer docs), corroborated by [BenchLM](https://benchlm.ai/models/muse-glimmer-30b). Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out**, through a **dedicated perception encoder** that accepts *interleaved* text and images — Meta's stated purpose being to "interpret screenshots, charts, and documents alongside conversation". No audio, no video, no generated media. Reasoning: **yes, with controllable effort** ("different reasoning strengths to select the right balance between quality and speed"). Tool calls: yes, and trained for them specifically — including **failure recovery**, where "when a tool call fails or returns an unexpected result, the model is trained to diagnose the error and retry rather than halt". Multilingual: trained on data from **100+ languages**.
- **Pricing (as of 2026-10-08):** **$0 licence cost — Apache 2.0.** Hosted rates per this repo's curated metadata: **OpenRouter $0.30 in / $1.10 out** per MTok; **Fireworks / Together / Vercel $0.35 / $1.50**; **NVIDIA NIM $0**. Self-hosting is genuinely practical rather than theoretical — see architecture.
- **Architecture:** **30B dense**, Apache 2.0. Training pipeline, fully disclosed in three phases: **pre-training on Muse Spark's outputs via logit distillation** with a similar data mix to the teacher; **mid-training** on longer-context, agent-heavy data with richer reasoning traces plus organic data; **post-training** combining SFT with on-policy distillation and RL across general, reasoning, coding and agentic domains. Deployment engineering: at full precision 30B would need **over 55 GB**; ~4-bit quantization compresses the language model to **under 20 GB**, leaving headroom for the KV cache, the perception encoder and the speculative-decoding drafter inside a **24 GB or 32 GB envelope**, with Meta stating it "validated that this compression introduces minimal to no degradation on agentic tasks". The **DFlash** drafter proposes whole token blocks that the main model verifies in parallel, "producing identical output quality"; quantized drafter builds ship too. Speed was measured on MacBook M4-Max, M5-Max and an RTX-5090 using a K-Quant-17GB build.

### Raw benchmarks found

> **Credibility note that materially raises my confidence in Meta's table:** Artificial Analysis independently measured two of the same benchmarks and landed almost exactly on Meta's figures — **Terminal-Bench 2.1: Meta 51.7% vs AA 51.7%** (identical), and **MMMU-Pro: Meta 74% vs AA 74.3%**. Vendor tables that survive outside audit that precisely are rare in this dataset, so Meta's unreplicated numbers are treated as more reliable than typical self-reporting.

Agent / tool use:

- **MCP Atlas: 75.5%** (Meta) — outstanding for a 30B model; for scale, Kimi K2.7 Code (1T params) measures 76.0% on the same benchmark
- **DeepSearchQA: 74.6%** (Meta)
- **OSWorld-Verified: 65.9%** (Meta) — real computer use from a locally-runnable model
- **Terminal-Bench 2.1: 51.7%** (Meta), independently **51.7%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/terminalbench-v2-1))
- skillsBench: **44.3%** (Meta)
- AA EnterpriseOps-Gym: **34.7%**; AA Tau3 Banking: **23.5%**; GDP.pdf: **10.0%** (Artificial Analysis)
- GDPval-AA: **790 Elo** / **14.5%** normalized; AA Briefcase: **477 Elo**; AA Agentic Index: **10.5%**; AA AutomationBench: **6.8%** (Artificial Analysis)
- **AA Terminal-Bench 4.0: 0.5%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/terminalbench-v4-0)) — a complete collapse on the newer harness, from 51.7% on 2.1 to effectively zero on 4.0
- τ-Bench: Meta names it among the benchmarks evaluated but published no extractable value

Reasoning / knowledge:

- **AA-LCR: 83.3%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)) — the single most impressive number in this report; higher than Claude Fable 5 (82.3%) and Claude Haiku 5.5 (82.7%), both of which have 1M windows against this model's 128K
- AA-GPQA Diamond: **83.5%** (Artificial Analysis)
- **AIME 2026: 94.7%** (Meta)
- **IFBench: 77%** (Meta) — strong instruction following
- AA-HLE: **22.0%**; MLCR-AA: **20.0%**; CritPt: **2.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **17.5**; BenchLM overall **41.7/100, rank #125 of 889** (36 of 625 benchmarks — well covered)
- AA-Omniscience: Index **−32.8**, Accuracy **27.0%**, **Hallucination Rate 81.9%**

Coding:

- **SWE-bench Verified: 76%** (Meta) — remarkable for 30B dense weights, though vendor-reported and not independently reproduced
- SWE-bench Pro: **51.2%** (Meta)
- Terminal-Bench 2.1: **51.7%** (counted once for agentic and once for coding)
- SciCode: **43.6%** (Meta), independently **AA-SciCode 44.9%** — another close vendor/independent match
- AA Coding Index: **49.0%** (Artificial Analysis)
- LiveCodeBench, FrontierCode, Vibe Code Bench: no verified public score found

Multimodal:

- **CharXiv: 78.8%** (Meta) — the best chart-understanding figure of any model in this batch
- **OmniDocBench 1.5: 75.8%** (Meta)
- **ScreenSpot Pro: 75.4%** (Meta) — strong GUI grounding, consistent with the OSWorld result
- **MMMU-Pro: 74%** (Meta), independently **74.3%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/mmmu-pro))
- No video or audio benchmark — correctly, since neither modality is supported

Long context:

- No MRCR / RULER / needle-retrieval curve published. **AA-LCR 83.3%** is the only quantified long-context measurement, and it is exceptional — but it measures reasoning over long input, not retrieval, so the 131K window's needle behaviour remains unvalidated.

### Normalized scores (1–100)

- **Tool use: 72/100.** For a 30B model that fits in 20 GB, **MCP Atlas 75.5%, DeepSearchQA 74.6% and OSWorld-Verified 65.9%** are genuinely impressive — the MCP figure is within half a point of a 1-trillion-parameter model, and the Terminal-Bench 2.1 result at 51.7% was reproduced *exactly* by an independent lab. Trained failure recovery and verified OpenClaw/OpenCode scaffold compatibility are substantive rather than cosmetic. Capped firmly by the newer-harness collapse — **AA Terminal-Bench 4.0 at 0.5%**, AutomationBench 6.8%, AA Agentic Index 10.5%, AA Briefcase 477 Elo — which says this model performs in the scaffolds it was trained for and falls apart outside them.
- **Reasoning: 73/100.** **AA-LCR 83.3%** is the standout: better long-context reasoning than several frontier models with windows eight times larger, measured independently. AA-GPQA Diamond 83.5%, AIME 2026 94.7% and IFBench 77% round out a strong profile for the size class. Capped by AA-HLE 22.0%, MLCR-AA 20.0%, CritPt 2.6%, an AA Intelligence Index of 17.5, and an **81.9% hallucination rate** against 27.0% accuracy — it reasons well over material it is given and fabricates when asked from memory.
- **Context window: 68/100.** 131,072 tokens is modest by 2026 standards and would ordinarily score around 60 on raw size. It is scored meaningfully above that because the window is **the best-validated-per-token in this batch**: AA-LCR 83.3% beats models with 1M windows outright, so the 128K it has is demonstrably high-quality rather than nominal, and mid-training was explicitly aimed at longer-context agent data. Held under 70 by the absence of any retrieval curve and by the simple fact that 128K cannot hold what 1M can.
- **Multimodal: 78/100.** The most consistent multimodal evidence base of any model in this batch, and nearly all of it corroborated: **CharXiv 78.8%, OmniDocBench 1.5 75.8%, ScreenSpot Pro 75.4%, MMMU-Pro 74% (74.3% independently)** — charts, documents, GUI grounding and general vision all measured and all in the mid-to-high 70s, delivered through a dedicated perception encoder supporting interleaved text and images. Capped by text-only output and by the complete absence of audio and video, which bounds the dimension structurally.
- **Coding: 70/100.** **SWE-bench Verified 76%** from a 30B dense model is the headline and it is a strong claim; SWE-bench Pro 51.2% and SciCode 43.6% (independently 44.9%) support a credible mid-tier coding profile, and Meta's track record of surviving independent replication on two other benchmarks lends the 76% more weight than a typical vendor figure. Capped because the 76% itself is **not** independently reproduced, because there is no LiveCodeBench or FrontierCode result, and because an AA Coding Index of 49.0% suggests the aggregate picture is weaker than the headline.
- **Cost efficiency: 96/100.** Among the best in this dataset, and for engineering reasons rather than just licensing. **Apache 2.0** weights mean zero licence cost and unrestricted commercial self-hosting; **NVIDIA NIM is listed at $0**; hosted rates are $0.30/$1.10 (OpenRouter) or $0.35/$1.50 — trivial against frontier pricing. Crucially the self-host story is real: ~4-bit quantization takes the model from **55+ GB to under 20 GB**, fitting a 24–32 GB consumer envelope *together with* the KV cache, perception encoder and drafter, with Meta stating validated minimal degradation on agentic tasks — and the DFlash drafter delivers faster generation at identical output quality. Short of 100 only because a 20 GB envelope still requires a high-end consumer GPU or an M-series Mac, and because no managed free tier with rate limits exists outside NIM.
- **Overall Score: 72.2/100.** Mean of the five non-cost dims (72 + 73 + 68 + 78 + 70) / 5 = 72.2. Best fit: exactly what it was built for — **always-on local personal agents** with screenshot, chart and document understanding, MCP tool chains, and privacy-preserving access to personal context, running offline on hardware you already own at zero marginal cost. The two things to design around are both well-evidenced: it collapses on agentic harnesses it was not trained for (Terminal-Bench 4.0 at 0.5%), and its 81.9% hallucination rate means it should be given context rather than trusted from memory.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Meta AI Research's Muse Glimmer launch post (release date, Apache-2.0 licence, 30B dense size, the three-phase logit-distillation-from-Muse-Spark training recipe, the perception encoder and interleaved text/image input, controllable effort, 100+ language coverage, trained failure recovery, OpenClaw/OpenCode scaffold compatibility, the Advanced AI Scaling Framework assessment, the full quantization arithmetic from 55+ GB to under 20 GB inside a 24–32 GB envelope, the DFlash speculative-decoding drafter, the measured hardware set, and the vendor benchmark figures), BenchLM's aggregated model page, and the underlying Artificial Analysis leaderboards (Terminal-Bench 2.1 and 4.0, MMMU-Pro, SciCode, AA-LCR, GPQA Diamond, HLE, CritPt, MLCR, Omniscience, Intelligence Index, GDPval, Briefcase, AutomationBench, EnterpriseOps-Gym, Tau3 Banking, GDP.pdf). Where Meta and Artificial Analysis measured the same benchmark the agreement (Terminal-Bench 2.1 51.7/51.7, MMMU-Pro 74/74.3, SciCode 43.6/44.9) is reported explicitly and used to calibrate trust in Meta's unreplicated figures; the Terminal-Bench 4.0 collapse is weighted as a real limitation rather than dismissed as a harness artefact. The repo's `meta.json` supplied the hosted-partner price list, which is reported as curated rather than re-verified today. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
