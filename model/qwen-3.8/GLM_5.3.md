# Qwen 3.8 — findings by GLM 5.3

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (open-weights flagship, Qwen3.8-2.4T-A95B)
- **Short description:** Alibaba's August 2026 open-weights Max-class reasoning MoE (2.4T total / 95B active) — the first Qwen-Max-class model released as open weights; thinking always on, text-only. Top use case: self-hosted frontier agentic coding and long-horizon work.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-2.4T-A95B` (+FP8 build); serve with vLLM/SGLang/TokenSpeed; Qwen Cloud hosts the commercialized **Qwen3.8-Max** twin (vision input, non-thinking support, 1M default). **No OpenCode Zen ID** for the open model.
- **Release / knowledge:** 2026-08-12 (HF collection updated Aug 13); knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (HF); no Zen ID, no Free ID
- **Context window:** 262,144 tokens natively, extensible to 1,010,000 with YaRN (official model card; BenchLM tracks the 1M configuration).
- **Modalities:** text in; text out; reasoning mandatory (thinking cannot be disabled; reasoning_effort xhigh/medium/low); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** open weights under the Qwen3.8-Max license — self-hosting at cost (2.4T-param footprint is hardware-heavy); no verified per-token list price for this exact open ID; commercial twin Qwen3.8-Max served on Qwen Cloud.
- **Architecture:** MoE, 2.4T total / 95B active; 512 experts (10 routed + 1 shared); Gated DeltaNet + Gated Attention hybrid; MTP-trained.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (official card, Claude Code avg@10; Vals harness 67.4%)
- OSWorld-Verified: **86.1%** (BenchLM — elite computer use); WebArena-Verified **66.8%**; AndroidWorld **85.3%**; MobileWorld **77.8%**
- Toolathlon-Verified: **72.5%**; CoWorkBench **74.8%**; SkillsBench **70.2%**; JobBench **53.4%**; Agents' Last Exam **27.0 pass / 52.4 score**; WideSearch **81.9%**; HLE w/ tools **56.2%** (BenchLM/official)
- GDPval-AA / Claw-Eval / Tau3: **no verified public score found** for this ID
- FrontierSWE: **73.5%** (v1, official card); FrontierSWE v2 **15.8%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (official card/BenchLM; Vals 93.7%)
- HLE: **43.6%** (no tools; 56.2% with tools) (official card)
- MRCR v2 256K (8-needle): **92.9%**; LongBench v2 **66.3%** (official card)
- IFBench: **82.8%**; HealthBench **60.2%**; $OneMillion-Bench expert **52.5** (official card)
- Artificial Analysis Intelligence Index: **no verified public score found** for this exact ID
- MMLU-Pro (Vals): **88.6%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **85.6%** (BenchLM)
- SWE-bench Pro: **67.7%**; DeepSWE 1.1 **56.6%**; NL2Repo-Bench **55.9%**; LiveCodeBench (Vals) **87.9%** (BenchLM/official)
- PaperBench: **93.0%** (official card — class-best); QwenSWEBench **80.7%**; QwenReactBench **1724**; QwenQoderBench **58.4%** (official)
- SciCode / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 262K native → 1.01M with YaRN (official card); MRCR v2 92.9% at 256K; no 512K–1M retrieval figure published.

Multimodal:

- Text-only model (official card: "Multimodal inputs are not supported").

### Normalized scores (1–100)

- **Tool use: 87/100.** OSWorld-Verified 86.1%, TB2.1 86.6%, AndroidWorld 85.3% and CoWorkBench 74.8% are top-tier; GDPval/Tau3/Claw-Eval unpublished and AutomationBench 27.3% is weak, capping it.
- **Reasoning: 86/100.** GPQA 92.6%, HLE 43.6% (56.2% w/tools), MRCR 92.9% at 256K and IFBench 82.8% clear or approach the frontier bars; no AA Index and no ARC/CritPt data published for this ID.
- **Context window: 85/100.** 262K native places it at the top of the 200K–500K band; the 1M YaRN extension is real but retrieval is only verified at 256K (not ≥98% at 512K+).
- **Multimodal: 15/100.** Text-only by design (official card); vision is reserved for the Qwen3.8-Max commercial twin.
- **Coding: 85/100.** SWE-bench V 85.6%, LiveCodeBench 87.9%, TB2.1 86.6% and PaperBench 93.0% are excellent; DeepSWE 56.6% and FrontierSWE v2 15.8% sit well below frontier refs.
- **Cost efficiency: 75/100.** Open weights with no verified per-token list price; self-hosting a 2.4T-param MoE is hardware-intensive, offset by a competitive multi-provider ecosystem — mid-band value.
- **Overall Score: 71.6/100.** (87 + 86 + 85 + 15 + 85) / 5 = 71.6. Best-fit: the strongest open-weights text-only agent stack for sovereignty-minded deployments; the Max twin adds vision + 1M-default for API users.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (official Qwen3.8-2.4T-A95B model card, BenchLM, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
