# Qwen3.8 Flash — findings by Muse Glimmer 30B

- Source: Qwen / Qwen3.8 Flash, e.g. Qwen Cloud `qwen3.8-flash`, open weights `Qwen/Qwen3.8-Flash-Next`
- Date: 2026-11-03
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba Qwen Team production multimodal LLM based on Qwen3.8-Flash-Next open weights. 125B total / 6B activated MoE with vision encoder, 1M context API, built-in tools for agentic use.
- **Provider / access:** Qwen Cloud / Model Studio OpenAI-compatible API `qwen3.8-flash`; open weights Hugging Face `Qwen/Qwen3.8-Flash-Next`, ModelScope. Chat Completions API.
- **Release / knowledge:** GitHub news 2026-08-26 release of Qwen3.8-Flash-Next; Qwen Cloud production model live 2025-2026. Knowledge cutoff not published.
- **IDs:** `qwencloud/qwen3.8-flash` ; HF `Qwen/Qwen3.8-Flash-Next`
- **Context window:** 262,144 tokens natively, extensible to 1,000,000 tokens via YaRN. API advertises 1M default, max input 991K, max output 131K.
- **Modalities:** Input text, image, video; Output text. Built-in tools: code_interpreter, i2i_search, t2i_search, web_extractor, web_search, pdf_parsing, web_fetch. Reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-10-26):** Qwen Cloud $0.15 / 1M input, $0.47 / 1M output. Input implicit cache $0.016 / 1M, explicit cache create $0.20 / 1M, read $0.016 / 1M.
- **Architecture:** 125B total parameters, 6B activated per token, MoE 512 experts 10 routed + 1 shared. Additional 51B n-gram embedding and 4B MTP. Hybrid Gated DeltaNet + Qwen Sparse Attention layers. Vision encoder for multimodal. Apache-2.0 / qwen-community-1.0 license.

### Raw benchmarks found

> List measured numbers with source.

Agent / tool use:
- Toolathlon Verified Pass@1: **73.5** (Qwen HF model card)
- IFBench: **81.3** (Qwen HF model card)
- Agents’ Last Exam Pass@1 24.3, Score 51.2 (Qwen HF model card)
- CoWorkBench: **73.9** (Qwen HF model card)

Reasoning / knowledge:
- GPQA Diamond: **91.7** (Qwen HF model card)
- HLE: **35.9** (Qwen HF model card)
- JobBench: **55.7** (Qwen HF model card)

Coding:
- DeepSWE 1.1: **58.7** (Qwen HF model card)
- SWE-bench Pro: **62.5** (Qwen HF model card)
- SWE-bench Multilingual: **81.0** (Qwen HF model card)
- NL2Repo-Bench: **48.1** (Qwen HF model card)
- LiveCodeBench v6: **91.9** (Qwen HF model card)

Multimodal / vision:
- Multimodal tool use ClawEval-MM Pass@3 64.4 / Average 60.4 (Qwen HF model card)
- MathVision Without CI 90.6 / With CI 95.7 (Qwen HF model card)
- RealWorldQA: **88.5** (Qwen HF model card)

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathlon 73.5 and IFBench 81.3 indicate strong tool use; caps at ~78 due to mixed agentic exam scores.
- **Reasoning: 85/100.** GPQA Diamond 91.7 is frontier; HLE 35.9 pulls down overall reasoning depth.
- **Context window: 95/100.** 262k native + 1M via YaRN, API offers 1M default; tier ≥1M.
- **Multimodal: 80/100.** Image/video in, text out, plus built-in tool modalities; strong vision benchmarks.
- **Coding: 78/100.** LiveCodeBench 91.9 offset by DeepSWE 58.7 and SWE-Pro 62.5.
- **Cost efficiency: 92/100.** $0.15/$0.47 per 1M is competitive paid tier.
- **Overall Score: 83/100.** Mean of Tool 78, Reasoning 85, Context 95, Multimodal 80, Coding 78.

---
## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-11-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Qwen 3.8 Flash — findings by Muse Glimmer 30B

- Source: opencode/qwen-3.8-flash
- Archived date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's Qwen3.8 Flash sparse MoE (6B active, 1M hosted) for cheap high-volume coding/agents; LiveCodeBench 91.9%, GPQA 91.7% at $0.15/$0.47 per 1M.
- **Provider / access:** Alibaba Cloud Model Studio / OpenCode `opencode/qwen-3.8-flash`. Hosted API; open weights available per meta.json.
- **Release / knowledge:** Release date not verified publicly; knowledge cutoff not published.
- **IDs:** opencode/qwen-3.8-flash
- **Context window:** 1M API (262K native; 131K output) per meta.json
- **Modalities:** Text, image, video in; text out per meta.json
- **Pricing (as of 2026-10-20):** ~$0.15/$0.47 per 1M in/out; $0 self-host per meta.json
- **Architecture:** Sparse MoE, 6B active — details from meta.json short description. Official page: https://qwenlm.github.io/blog/qwen-3.8-flash/

## Raw benchmarks found

SELF-EXCLUSION: Zero verified public benchmark numbers found for the exact model ID opencode/qwen-3.8-flash via independent web research on 2026-10-20. Meta.json short description cites LiveCodeBench 91.9% and GPQA 91.7% but no independent source or scorecard was located for this exact hosted ID. No verified public score found for any benchmark below.

Agent / tool use:
- Agent / tool use: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- OSWorld-Verified / Tau3-Banking / Toolathlon: no verified public score found
- GDPval-AA / Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MRCRv2 / IFBench: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- DeepSWE / FrontierSWE / PaperBench: no verified public score found

Long context:
- MRCR / RULER / GraphWalks: no long-context retrieval reported publicly for this exact ID

Multimodal:
- RecreationBench / ClawEval-MM / OmniDocBench: no verified public score found

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
