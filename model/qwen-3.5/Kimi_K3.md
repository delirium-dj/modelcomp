# Qwen 3.5 — findings by Kimi K3

- Source: Alibaba Qwen (`Qwen/Qwen3.5-397B-A17B`, flagship of the Qwen 3.5 family)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (flagship Qwen3.5-397B-A17B; family spans 0.8B–397B)
- **Short description:** Alibaba's February 2026 open-weight MoE family with hybrid Gated DeltaNet + full attention, native multimodal training, 262K context and 201 languages. Successor to Qwen3 / Qwen3-Coder / Qwen3-Next; the flagship targets agentic coding at low per-token cost.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, plus official FP8 / GPTQ-Int4 quants). Hosted: Morph `morph-qwen35-397b` (OpenAI-compatible `https://api.morphllm.com/v1`, full 262K ctx), Alibaba DashScope / Model Studio intl (`qwen3.5-397b-a17b`), Together AI. Chat Completions API. No Zen Free ID verified (checked via public listings; not in OpenCode Zen tables).
- **Release / knowledge:** Released 2026-02-16 (Qwen team announcement coverage); knowledge cutoff not stated in sources read.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF), `qwen3.5-397b-a17b` (DashScope intl), `morph-qwen35-397b` (Morph). No `opencode/` free ID found.
- **Context window:** 262,144 tokens native (verified via HF model card and Morph serve config); extensible to ~1,010,000 with YaRN (vendor warns static YaRN degrades short-context quality — enable only past 262K). Max output 131,072 on Morph full-context deployment.
- **Modalities:** Text + image input (native multimodal training; family-wide video input vendor-claimed but unverified for this checkpoint), text output. Thinking mode on by default (`<think>…</think>`); tool calling supported (needs `qwen3_coder` parser on vLLM/SGLang); JSON mode via chat template.
- **Pricing (as of 2026-10-05, list per 1M):** Morph $0.50 in / $3.50 out / $0.30 cached (262K ctx). DashScope intl $0.60/$3.60 (256K); Together AI $0.60/$3.60. DashScope mainland-China tiered lower ($0.172/$1.032 for 0–128K band). Open weights → self-host alternative (~8 GPUs for full context).
- **Architecture:** Sparse MoE, 397B total / 17B active per token; 60 layers; 512 experts (10 routed + 1 shared active); hidden 4,096; attention pattern 3×(Gated DeltaNet→MoE) → 1×(Gated Attention→MoE) repeated 15× — ~75% linear attention keeps long context cheap. Apache 2.0 license.

### Raw benchmarks found

Vendor-run (Alibaba's internal agent scaffold, Feb 2026 — independent reproductions still thin per morphllm):

Agent / tool use:

- Terminal-Bench 2: **52.5%** (Alibaba scaffold)
- BFCL v4 (function/tool calling): **72.9%**
- BrowseComp: **78.6%**
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (Alibaba scaffold)
- AIME 2026: **91.3%** (Alibaba scaffold)
- MMLU-Pro: **87.8%** (Alibaba scaffold)
- HLE / LCR / MLCR / CritPt / Omniscience: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found for this checkpoint** (AA Index 44 cited in the community table belongs to Kimi K3, not Qwen 3.5)

Coding:

- SWE-bench Verified: **76.4%** (Alibaba scaffold; same band as DeepSeek V4 / GLM-5.x / Kimi K2.6 per morphllm)
- LiveCodeBench v6: **83.6%**
- SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Community agentic-coding rankings (BenchLM roundup, cited by morphllm): Qwen3.5-397B (reasoning) just behind DeepSeek V4 Pro and Kimi K2.6, ahead of GLM-5.1.
- Quantization caveat (The Kaitchup evals): INT4 + reasoning on truncated ~70% of AIME25 answers vs ~30% full-precision (32K output cap) — a serving-config failure mode, not a weight-quality loss.

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published for this checkpoint; 262K native window verified, ~1M YaRN extension is documented-with-caveats, not retrieval-measured.

### Normalized scores (1–100)

- **Tool use: 68/100.** BFCL v4 72.9 + BrowseComp 78.6 + TB2 52.5 put it at the top of the mid band (TB 45–60% ref); capped by vendor-only scaffold numbers and known tool-parser footguns on common runtimes.
- **Reasoning: 85/100.** GPQA 88.4, AIME 91.3, MMLU-Pro 87.8 — just under the 90+ frontier band; no HLE/CritPt to confirm the top end. All vendor-run, which caps confidence.
- **Context window: 75/100.** 262,144 native (200–500K band, 70+ territory) with a documented but quality-lossy ~1M YaRN path; 131K max output is generous; no retrieval measurement published.
- **Multimodal: 70/100.** Native multimodal training with text+image input confirmed; video input claimed at family level but unverified for this checkpoint; text-only output (+image-in band 60–70, top of band for native training).
- **Coding: 84/100.** SWE-bench Verified 76.4 and LiveCodeBench v6 83.6 are strong open-weight numbers (frontier band on LCB); capped slightly by single-scaffold provenance and mid Terminal-Bench 52.5.
- **Cost efficiency: 86/100.** $0.50–0.60 in / $3.50–3.60 out hosted (below the ~$1.25/$4.25 ref → high 80s territory), Apache-2.0 self-host as fallback; irregular mainland-China pricing helps further.
- **Overall Score: 76/100.** Mean of five quality dims (68+85+75+70+84)/5 = 76.4 → 76. Best fit: permissively licensed long-context coding/reasoning base for teams that fine-tune or self-host, run hosted at full precision (avoid INT4 + thinking-on).

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (morphllm.com Qwen 3.5 guide + pricing table, Hugging Face model card as cited, digitalapplied/chatforest/codersera coverage, DashScope/Together list prices as cited); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
