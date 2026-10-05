# Qwen3.8-Flash-Next — findings by Kimi K3

- Source: Alibaba Qwen (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's open-weights preview of the Qwen4 architecture (August 2026): a 176B-total / 6B-active sparse MoE with a 51B n-gram embedding table, Qwen Sparse Attention, gated residuals and a 3:1 Gated DeltaNet hybrid stack, shipped early so the ecosystem can prepare tooling for Qwen4. Flash-tier efficiency with flagship-adjacent evals.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`, BF16 + FP8 block-128 checkpoints; NVFP4 via RadixArk for Blackwell). Served on InferenceX/SemiAnalysis AgentX via SGLang with NEXTN MTP; OpenAI-compatible chat-completions style endpoints through Qwen-ecosystem hosts.
- **Release / knowledge:** August 2026 (HF model card + Qwen blog, per TechNode/InferenceX); knowledge cutoff not disclosed in sources read.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HF), `Qwen3.8-Flash-Next-FP8` (quant checkpoint). No Zen Free ID verified.
- **Context window:** 262,144 tokens native, extensible up to 1,000,000 (HF model card, verified via InferenceX mirror). QSA's fixed indexer budget (512 blocks / 2048 tokens) bounds long-context attention cost; no retrieval-quality measurement published.
- **Modalities:** Text + image + video input implied by multimodal eval coverage (LVBench long-video, RealWorldQA, MathVision, CharXiv RQ, Vision2Web, ClawEval-MM all reported on the card); text output. Thinking mode on by default (`enable_thinking`, `preserve_thinking`, `reasoning_effort` configurable); tool calling supported; MTP speculative decoding head (4B).
- **Pricing (as of 2026-10-05):** $0.16/M input, $0.47/M output (LLMLearner listing). Open weights under qwen-community-1.0 → self-host fallback.
- **Architecture:** 176B total = 125B main model + 51B n-gram embedding table (lookup, not compute-bearing) + separate 4B MTP head; 6B active/forward pass; 48 layers; hidden 2,560; 512 experts (10 routed + 1 shared); 20M bigram/trigram embeddings at layer 2; vocab 248,320; license qwen-community-1.0.

### Raw benchmarks found

All evals vendor-reported by Qwen on the HF model card (mirrored by InferenceX, caveat: self-reported, own harness; engine support days old at first benchmark):

Agent / tool use:

- Toolathlon Verified: **73.5%**
- CoWorkBench / JobBench: **73.9% / 55.7%**
- Agents' Last Exam (Pass@1): **25.2%**
- AndroidWorld: **84.5%**; OSWorld 2.0 (Binary/Partial): **19.4% / 52.3%**
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA: **no verified public score found** (Toolathlon + GUI suites stand in)
- ClawEval-MM (Pass@3): **64.4%**; Vision2Web: **64.0%**
- InferenceX AgentX: inference-efficiency benchmarked (tokens/$ across H200 FP8 / Blackwell NVFP4 configs; MTP=3 acceptance length 3.24, thinking off) — system-level throughput data, not a capability score.

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vendor; vs Nemotron 3 Ultra 87.0 self-reported reference)
- IFBench: **81.3%**
- MathVision (without/with CI): **90.6% / 95.7%**; CharXiv RQ (without/with CI): **84.6% / 90.6%**
- HLE / LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:

- LiveCodeBench v6: **91.9%**
- SWE-bench Multilingual: **81.0%** (vs Nemotron 3 Ultra 67.7 self-reported)
- SWE-bench Pro: **62.5%**
- DeepSWE 1.1: **58.7%**
- SWE-bench Verified / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- ERQA **72.3%** / LVBench **76.6%** / RealWorldQA **88.5%** / RecreationBench **49.9%** (multimodal understanding, incl. long video); no MRCR / RULER / GraphWalks needle-retrieval numbers published — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 80/100.** Toolathlon 73.5 + CoWorkBench 73.9 + AndroidWorld 84.5 put agentic tool use above the mid band; capped by OSWorld-binary 19.4, JobBench 55.7 and all-vendor provenance.
- **Reasoning: 86/100.** GPQA 91.7 clears the frontier reference band and MathVision 95.7 (with CI) is high; no HLE/LCR to verify the top end, all self-reported.
- **Context window: 78/100.** 262K native with an explicit 1M extension path and a sparse-attention design built for long-context latency; no retrieval measurement keeps it below the verified-1M tier.
- **Multimodal: 82/100.** Image + long-video input demonstrated across five+ vendor evals (LVBench, RealWorldQA, MathVision, CharXiv, Vision2Web); text-only output caps it in the +video-in band mid-range.
- **Coding: 85/100.** LiveCodeBench v6 91.9 (frontier band), SWE-bench Multilingual 81.0 and Pro 62.5, DeepSWE 58.7 — strong all-round coding profile; vendor-harness caveat caps it.
- **Cost efficiency: 95/100.** $0.16/$0.47 per 1M hosted is near the cheapest reference point (~$0.10/$0.20 → 97–99); 6B active params and open weights make self-host cheap too.
- **Overall Score: 82/100.** Mean of five quality dims (80+86+78+82+85)/5 = 82.2 → 82. Best fit: cheap, fast agentic-coding and multimodal workhorse ahead of Qwen4 — early-ecosystem checkpoint, expect numbers to move as kernels mature.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (InferenceX/SemiAnalysis model page mirroring the HF Qwen3.8-Flash-Next card, llmlearner.com pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
