# Ling 3.0 Flash VL — findings by GLM 5.3 Flash

- Source: InclusionAI (`ling-3.0-flash-vl`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's next-generation native multimodal model, built on Ling 3.0 Flash (124B total / 5.5B active MoE), adding native image and video perception plus visual agent capabilities for real-world task solving through vision. Not a tier variant — it is the VL (vision-language) sibling of `ling-3.0-flash`.
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-vl` (Chat Completions API, `https://openrouter.ai/api/v1/chat/completions`); DeepInfra `inclusionai/ling-3.0-flash-vl-20260910` (131K context); Novita `inclusionai/ling-3.0-flash-vl-20260910` (262K context); kilo.ai lists a `ling-3.0-flash-vl-free` variant at $0. Not listed on OpenCode Zen as of 2026-10-03 (no Zen Free ID exists).
- **Release / knowledge:** Released 2026-09-10 (Benchable model page dated 2026-09-10; HF release image tagged `ling-3.0-flash-vl-0910`). Knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-flash-vl` (OpenRouter); no Free ID on Zen — explicitly stated.
- **Context window:** 256K total per the official Hugging Face model card ("support for a context window of up to 256K tokens"; SGLang cookbook recipe runs 262,144 via YaRN rope scaling on a 131,072 base). Max output not published on the HF card; Novita serves 262K context. Benchable's spec sheet lists 131K — conflicting secondary source, the vendor card wins.
- **Modalities:** image, video, text in (ViT encoder + 2-layer MLP projector; VideoRoPE for temporal order); text out; reasoning yes (hybrid instant/reasoning, thinking mode enabled by default); tool calls yes; structured outputs / JSON mode yes (response_format, seed, structured params supported).
- **Pricing (as of 2026-10-03):** DeepInfra $0.06 in / $0.18 out / $0.012 cached per 1M; Novita $0.021 in / $0.0616 out per 1M; kilo.ai $0 free variant listed. MIT open weights — self-hosting possible.
- **Architecture:** 124B total / 5.5B activated per token (sparse MoE, `bailing_moe_v3_vl`); 42-layer hybrid backbone alternating KDA and Gated MLA layers at a 5:1 ratio; ViT visual encoder with two-layer MLP projector; VideoRoPE positional encoding for image/video temporal order; open weights under MIT license (safetensors, ~125B params on HF).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: evaluated under the Artificial Analysis protocol (Terminus 2 harness, unified 2-hour timeout, preserve-thinking JSON parser, 3 runs per task mean, temperature=1.0, 32K max new tokens, 256K context) per the HF model card — but the numeric result is published only inside a benchmark chart image; **no verified public score found** in extractable text. Terminal-Bench 2.1 capability is therefore provisional only.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Benchable tool support: tools, tool choice, reasoning, structured outputs all supported; 100% response success rate (reliability) on Benchable's internal eval harness (no verified public score found for agentic benchmarks themselves)

Reasoning / knowledge:

- Benchable Reasoning: **97.5%** (independent Benchable eval, 80th percentile)
- Benchable Mathematics: **95.0%** (85th percentile)
- Benchable Ethics: **100%** (most accurate model at its price point per Benchable)
- Benchable General Knowledge: **95.8%** (36th percentile)
- Benchable Hallucinations accuracy: **95.7%** (49th percentile — mid-pack honesty)
- Benchable Instruction Following: **69.1%** (64th percentile)
- Benchable Email Classification: **98.9%** (69th percentile)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index v4.1.1: **42** (vendor-published on the HF model card; up 4 points from Ling 3.0 Flash's 38)

Coding:

- Benchable Coding: **95.0%** (independent Benchable eval, 90th percentile)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks value found for the 256K window)

### Normalized scores (1–100)

- **Tool use: 52/100.** No verified agentic benchmark number in extractable text (Terminal-Bench 2.1 chart is image-only; no Tau3/GDPval/OSWorld found); tool calling and structured outputs are supported and Benchable reports 100% response reliability, but the missing agentic scores cap this at a provisional mid score.
- **Reasoning: 68/100.** Benchable independent reasoning 97.5% (80th pct) and math 95% are strong, and the vendor-published AA Intelligence Index v4.1.1 of 42 sits just above the 20–35 mid band; the absence of GPQA Diamond / HLE / LCR verification (only Benchable's in-house harness) caps it below the frontier band.
- **Context window: 72/100.** 256K native (262,144 via YaRN per the vendor card) lands in the 200K–500K tier (200K = 70, scaled slightly up for 256K); no measured long-context retrieval and conflicting secondary specs (Benchable 131K) cap it there.
- **Multimodal: 85/100.** Native image and video input with ViT + VideoRoPE, visual reasoning/verification, and visual agent "Act" capabilities (web/software UI interaction per the vendor card); text-only output keeps it out of the 90–100 band.
- **Coding: 74/100.** Benchable coding 95.0% (90th pct) is the only verified coding number and comes from Benchable's in-house harness, not SWE-bench/LiveCodeBench/SciCode; inherits Ling 3.0 Flash's language capabilities, but unverified standard-harness coding numbers cap the score in the mid band.
- **Cost efficiency: 97/100.** Cheapest verified paid route is Novita at $0.021/$0.0616 per 1M (DeepInfra $0.06/$0.18), placing it at the ~$0.10/$0.20 → 97–99 band; no Zen Free ID (a $0 kilo.ai free variant exists but was not evaluated), and MIT open weights make self-hosting a further cost lever.
- **Overall Score: 70.2/100.** Mean of the five non-cost dims (52 + 68 + 72 + 85 + 74) / 5 = 70.2; best fit: a cost-efficient multimodal workhorse for image/video understanding and visual agent tasks, pending standard-harness (SWE-bench, GPQA, Terminal-Bench) verification before trusting it as a primary coder or planner.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-03
- Method: public internet research (Hugging Face vendor model card, Benchable independent evals, OpenRouter/DeepInfra/Novita/kilo.ai listings, OpenCode Data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
