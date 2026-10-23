# Qwen 3.5 4B — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-4B`; curated id `opencode/qwen-3.5-4b`), cross-checked against **Artificial Analysis**, llm-stats, Benchgen, the Hugging Face model card and the Qwen3.5 launch blog
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B
- **Short description:** A **compact dense member of Alibaba's Qwen 3.5 open-weight family** — a **4B-parameter natively-multimodal** model built for **light tool-use, coding and local assistants**, carrying the family's hybrid-attention design and an unusually large context for its size (**262K native, YaRN-extendable toward ~1M**). It's a genuine small-model over-achiever on knowledge/coding for its parameter count, but sits in the **low intelligence-index tier** the way all 4B dense models do.
- **Provider / access:** open weights (Hugging Face `Qwen/Qwen3.5-4B`, **Apache 2.0**, commercial use allowed); **verified free hosted lane on SiliconFlow**; self-host free; chat.qwen.ai playground.
- **Release / knowledge:** **~2026-03-02** (llm-stats / HF checkpoint; Benchgen lists a Sept-2025 compact-line origin — a minor date discrepancy noted, treated as the early-2026 open release).
- **IDs:** `Qwen3.5-4B`; family `qwen-3.5` (397B-A17B), `qwen-3.5-9b`, `qwen-3.5-2b`, `qwen-3.5-0.8b`, `qwen-3.5-27b`, `qwen-3.5-35b-a3b`.
- **Context window:** **262,144 native**; **extendable to ~1,010,000 via YaRN**; **81,920 max output** (curated meta).
- **Modalities:** **text + image in** (confirmed; curated meta adds video), text out; reasoning mode yes.
- **Pricing (as of 2026-10-23):** **free open weights**; **free hosted lane** (SiliconFlow) — effectively zero-cost.
- **Architecture:** dense 4B, Qwen 3.5 hybrid attention + YaRN long-context extension; native multimodal (image) encoder.

### Raw benchmarks found

> **Provenance:** the composite is **independent (Artificial Analysis)**; the per-suite numbers are **first-party / aggregator**. The load-bearing signal is that Qwen3.5-4B is a **small model**: AA's index puts it in the low tier even though its *within-size* results are strong.

Intelligence (independent):

- **Artificial Analysis Intelligence Index: 13** (Reasoning) — a **small-model-tier composite**; llm-stats' own composite ranks it deep on the full leaderboard (#227 range). This is the honest ceiling anchor.

Knowledge / instruction / code (first-party + Benchgen):

- **MMLU-Pro: ~79.1** and **IFBench: ~59.2** (Benchgen) — excellent *for a 4B*; strong general knowledge and instruction following relative to size
- **MMMU: ~74–78** region in the family table (small-model tier) — solid multimodal STEM for the class
- HumanEval/coding: the Qwen 3.5 line "ranks among the strongest open-weight models on HumanEval," and this compact tier over-performs its size, but **no authoritative 4B SWE-bench / LiveCodeBench absolute** was cleanly transcribed — scored as "good for 4B," not frontier.

### Normalized scores (1–100)

- **Tool use: 58/100.** The Qwen 3.5 family is framed around native multimodal agents/tool use, and a 4B can do light function calling, but reliability drops hard at this size (AA-13 tier); real but limited — mid-low.
- **Reasoning: 55/100.** MMLU-Pro 79.1 is genuinely strong *for 4B*, but the **independent AA Intelligence Index of 13** caps absolute reasoning depth; this is a capable small model, not a reasoner — scored mid-low on the independent anchor.
- **Context window: 80/100.** **262K native, YaRN-extendable toward ~1M** with an 82K output budget is remarkable for a 4B and the model's biggest differentiator; docked because extended-context *retrieval quality* isn't independently proven.
- **Multimodal: 68/100.** Native **text+image** (meta adds video), decent small-model MMMU — clearly above text-only peers its size, but vision depth is modest at 4B; mid.
- **Coding: 60/100.** Over-performs its size on HumanEval-class tasks and targets "light coding," but no strong code benchmark absolute and a small ceiling — low-mid.
- **Cost efficiency: 100/100.** Best possible: **free Apache 2.0 weights + a verified free hosted lane** — zero-cost local/edge deployment is its core value.
- **Overall Score: 64.2/100.** Half-up mean of the five quality dims (58+55+80+68+60)/5 = 64.2. Best fit: **on-device / edge and budget local assistants, light tool-and-code tasks, and image-understanding at near-zero cost**, where a 4B that over-delivers for its size and carries a huge extensible context is the point. Held down by the **independent AA Intelligence Index of 13** — a genuine small-model reasoning ceiling — and unproven extended-context retrieval. (Cost and context are its real strengths; raw capability is honestly capped.)

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Artificial Analysis** (Qwen3.5 4B Reasoning **Intelligence Index 13** — the independent capability anchor), **llm-stats** (4B params, Apache 2.0, released 2026-03-02, multimodal text+image, open weights, deep composite rank), **Benchgen** (MMLU-Pro 79.1, IFBench 59.2), the **HF `Qwen/Qwen3.5-4B`** card + **qwen.ai** Qwen3.5 blog (native multimodal agents, family HumanEval strength), and verified **SiliconFlow** free lane. Curated `meta.json` supplies 262K→1M YaRN, 82K output, Apache 2.0 and the video-input claim (video flagged as meta-added beyond the confirmed text+image). Scores are normalized 1–100 interpretations: reasoning/tool-use/coding are **anchored to the independent AA-13 small-model ceiling** (not the flattering within-size MMLU-Pro), while context and zero-cost are scored on solid evidence; a release-date discrepancy (Sept-2025 vs Mar-2026) is noted and resolved to the open release.
- Revisit trigger: an Artificial Analysis *update* or third-party SWE-bench/LiveCodeBench absolute for `qwen3.5-4b`, and any MRCR proof validating the YaRN ~1M extended-context claim.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
