# Qwen 3.5 4B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen `qwen-3.5-4b`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B (`qwen-3.5-4b`) — the mid-small dense member of the open-weight Qwen 3.5 line (0.8B / 2B / 4B / 9B / 27B dense + 35B-A3B and 397B-A17B MoE), with **native multimodal training** (the Qwen 3.5 generation's headline: "Towards Native Multimodal Agents").
- **Short description:** 4B dense hybrid-attention VLM — 8×(3×DeltaNet → FFN → 1×Attention → FFN) Gated DeltaNet + Gated Attention blocks (3:1 linear-to-softmax ratio), multi-token-prediction training — that posts knowledge scores near 8–12B-class models while fitting in ~4–6 GB of VRAM.
- **Provider / access:** open weights (Hugging Face `Qwen/Qwen3.5-4B`, ModelScope), **Apache 2.0**; hosted via Alibaba Cloud Model Studio, aggregators (apxml, Artificial Analysis providers); local via llama.cpp/vLLM/transformers (Ollama had Qwen 3.5-family integration gaps as of Mar 2026 — see below).
- **Release / knowledge:** **conflict:** Hugging Face/apxml date the release **2026-02-24** (Qwen 3.5 series announcement wave, Feb 16–25); llm-stats tracks **2026-03-02**; Artificial Analysis lists "March 2026". All sources agree on the February–March 2026 window; both dates reported. Knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-4B` (HF), Model Studio serving ids per aggregator.
- **Context window:** **262,144 native** (262K; HF, AA, llm-stats, apxml — all agree); apxml notes extensible to 1M. Max output not separately published.
- **Modalities:** text + image + **video** input, text out (Artificial Analysis modality table; Qwen 3.5 native-multimodal training); hybrid thinking mode (family-wide `enable_thinking`).
- **Pricing (as of 2026-10-27):** hosted **$0.03 in / $0.15 out** per 1M (Artificial Analysis, apxml); self-host is the primary route (Apache 2.0, ~3 GB at Q4 / ~8 GB FP (qwen35.com hardware table); qwen-ai.com says 6 GB VRAM).
- **Architecture:** dense, 4B nominal — **conflict:** Artificial Analysis lists **4.7B total parameters** (embedding overhead), apxml/llm-stats say 4B/4.0B; both reported. 350M auxiliary parameters (apxml).

### Raw benchmarks found

(agent section from Qwen's official HF card — the 4B column is **blank** for BFCL-V4, TAU2-Bench, VITA-Bench and DeepPlanning; Qwen publishes those only from the 9B up)

Agent / tool use:

- No BFCL/TAU2/tool benchmark published for the 4B tier; function calling is supported family-wide. **Ecosystem caveat:** as of March 2026, Ollama's Qwen 3.5 support had broken tool calling and non-loading vision models, with thinking forced on — llama.cpp was the recommended CLI for vision/tools (qwen-ai.com); the INT4 checkpoint ships as `Qwen3_5ForConditionalGeneration` with a vision tower that vLLM users skip via `--language-model-only` to free VRAM (ComputingForGeeks).

Reasoning / knowledge (Qwen official HF card, Qwen3.5-4B column):

- MMLU-Pro: **79.1** (vs Qwen3.5-9B 82.5, GPT-OSS-20B 74.8 — a 4B beating a 20B MoE)
- GPQA Diamond: **76.2** (9B 81.7; Qwen3-30BA3B 73.4); SuperGPQA 52.9; MMLU-Redux 88.8; C-Eval 85.1
- HMMT Feb 2025: **74.0**; HMMT Nov 2025: **76.8** (frontier-math-contest level for a 4B)
- Instruction following: IFEval 89.8, IFBench 59.2, MultiChallenge 49.0
- Artificial Analysis Intelligence Index: **estimated ~0.13 (auto) / 0.11 (standard)**, rank ~226–251 in its class (apxml) — small-model composite class, as expected.

Coding:

- LiveCodeBench v6: **55.8** (9B 65.6; GPT-OSS-20B 74.6); OJBench 24.1; Artificial Analysis Coding Index 0.23 (rank 130) (Qwen HF card, apxml)

Multimodal:

- Native multimodal generation (no bolt-on encoder per the Qwen 3.5 blog's series design); no MMMU figure isolated for the 4B in this pass.

Long context (**measured**):

- AA-LCR: **57.0**; LongBench v2: **50.0** (9B: 63.0 / 55.2) (Qwen HF card) — real retrieval evidence at 262K, uncommon for this size class.

### Normalized scores (1–100)

- **Tool use: 58/100.** Function calling exists and the family is agent-oriented, but Qwen itself publishes no agentic benchmark below the 9B tier, and the local tool-calling ecosystem for Qwen 3.5 was visibly rough early on (Ollama breakage, llama.cpp workaround required) — evidence floor caps the band.
- **Reasoning: 72/100.** Outstanding for 4B: MMLU-Pro 79.1 and GPQA Diamond 76.2 outclass many 7–20B rivals (GPT-OSS-20B on GPQA), HMMT 74–77.8 is contest-math territory — but AA's composite still places it in the small-model class, far under frontier.
- **Context window: 80/100.** 262K native with published retrieval measurements (AA-LCR 57.0, LongBench v2 50.0) — genuinely good evidence for the size; the "extensible to 1M" claim is unverified, and absolute retrieval quality is mid.
- **Multimodal: 70/100.** Text + image + video input via Qwen 3.5's native multimodal training (a real architectural advantage over bolt-on VLMs of this size); no MMMU-class score captured for the 4B, and some local runtimes ship the vision tower disabled.
- **Coding: 62/100.** LiveCodeBench v6 55.8 and OJBench 24.1 are respectable for 4B (near Qwen3-30BA3B-Thinking levels on LCB) but a clear ~10-point step behind the 9B sibling, with no SWE-bench-class evidence.
- **Cost efficiency: 94/100.** Apache 2.0, ~3 GB at Q4 (runs on any 16 GB laptop or phone-class hardware), $0.03/$0.15 hosted — among the best intelligence-per-dollar of any 2026 release; a 4B posting MMLU-Pro 79.1 is the whole point of the tier.
- **Overall Score: 68/100.** (58 + 72 + 80 + 70 + 62) / 5 = 68.4 → 68 — best fit: private on-device assistants, cheap high-volume multimodal pipelines, and edge RAG where a 262K window in 4 GB matters more than frontier accuracy; not the pick for agentic tool loops or hard coding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official Qwen sources first (Hugging Face model card with the full benchmark table, Qwen 3.5 "Towards Native Multimodal Agents" blog), then independent sources (Artificial Analysis release page, apxml specs/VRAM analyzer, llm-stats, MindStudio size-comparison, qwen-ai.com run-local guide, ComputingForGeeks vLLM/llama.cpp/Ollama benchmark, qwen35.com hardware table); release-date and parameter-count conflicts are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
