# Qwen 3.5 2b — findings by Qwen 3.8 Flash

- Source: Alibaba **Qwen3.5-2B** (curated id `opencode/qwen-3.5-2b`), cross-checked against **Artificial Analysis** ("Qwen3.5 small models", 2026-03-05), the HF `Qwen/Qwen3.5-2B` card, and qwen.ai's Qwen3.5 release
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note (why scored, not excluded):** the curated `meta.json` is **scaffolded** (generic "128K / Standard pricing"), but Qwen3.5-2B is a **fully real, independently-benchmarked model**: an official HF checkpoint (`Qwen/Qwen3.5-2B`, post-trained, 2026-03-09) and, crucially, a **verified Artificial Analysis Intelligence Index row = 16 (Reasoning)** — the load-bearing anchor below. It is part of the four-model Qwen3.5 small dense series (0.8B / 2B / 4B / 9B) that shipped alongside the larger Qwen3.5 line. The scaffolded "128K" is **overridden**: AA/Alibaba document **262K** context and **native vision**, not text-only.

## Model card

- **Name:** Qwen 3.5 2b
- **Short description:** The **phone-class dense model** of the Qwen3.5 small series — a **2-billion-parameter, Apache-2.0, natively multimodal (vision) dense model** with a **262K** context and the family's **unified thinking/non-thinking hybrid** approach. AA ranks it the strongest 2B-adjacent small model of its generation (matching a 7B rival, beating a 9B rival), positioned for **on-device / edge agents** where it "matches or beats models 3-10× its size." Runs at **under 2 GB** in 4-bit.
- **Provider / access:** **open weights** (Hugging Face `Qwen/Qwen3.5-2B`, **Apache 2.0**); BF16 native, no first-party Int4 release; **no serverless API hosting at AA publish-time** — effectively a local/on-device model.
- **Release / knowledge:** Qwen3.5 small series published **~2026-03-02/05** (HF checkpoint 2026-03-09); complements the Qwen3.5 flagship line released earlier that month.
- **IDs:** `Qwen3.5-2B`.
- **Context window:** **262,144 (262K) total** — very large for a 2B (scaffolded "128K" superseded).
- **Modalities:** **text + native vision in / text out** (image understanding; not video/audio) — above the text-only floor.
- **Pricing (as of 2026-10-23):** **free** open weights (self-host; <2 GB at 4-bit). No hosted-API price established.
- **Architecture:** dense transformer (2B), unified thinking/non-thinking hybrid, native vision encoder, 262K context — the smallest "agent" size after the 0.8B, targeting smartphones/low-VRAM edge devices.

### Raw benchmarks found

> **Provenance:** **Artificial Analysis first-party independent evaluation** (Intelligence Index v-series, Reasoning mode) plus family-level multimodal data — this is an **independent** anchor, not vendor self-report, which is why the score is better-grounded than the sibling scaffolded entries.

- **Artificial Analysis Intelligence Index (Reasoning): 16** — AA: "the 2B (16) matches the Falcon-H1R-7B at 7B and exceeds the Nemotron Nano 9B V2 at 9B"; +3 points over Qwen3 1.7B (est. 13).
- **Efficiency caveat:** the 2B used **~390M output tokens** to complete the Intelligence Index — the *most* of the whole series (vs 27B's 98M), i.e. heavy overthinking for its size.
- **Hallucination caveat:** AA-Omniscience is a family weakness (4B/9B hallucination 80-82%); small models skew worse on factuality.
- **MMMU-Pro (multimodal reasoning):** family data only for 9B (69.2) / 4B (65.4) / 0.8B (25.8); **2B MMMU-Pro not individually listed** but native vision is confirmed family-wide.
- No dedicated SWE-bench / GPQA row published for the 2B at AA publish-time.

### Normalized scores (1–100)

- **Tool use: 48/100.** Marketed for lightweight **on-device agents** and inherits Qwen3.5's tool-hybrid style, but a 2B model's function-calling/agentic depth is genuinely limited — below-mid, edge-assistant tier rather than real agent work.
- **Reasoning: 52/100.** **AA Intelligence Index 16** is respectable *for 2B* (beats 7B/9B peers), so it's scored as the top of its size class — but in absolute terms it's a small reasoner, and AA flags extreme token-burn (~390M) plus family-level hallucination, so mid, not beyond.
- **Context window: 62/100.** **262K is unusually generous** on paper for a 2B — the main spec upside — but effective long-context utilization at this parameter count is limited, so scored high-mid on spec with a reliability discount.
- **Multimodal: 52/100.** **Native vision confirmed** (image understanding) puts it clearly above the text-only floor — a standout for an under-2 GB model — though at 2B the visual reasoning is basic (family 0.8B MMMU-Pro was only 25.8).
- **Coding: 48/100.** No dedicated coding row; a 2B dense model handles only snippet-level / autocomplete coding, not repo or multi-file work — below-mid, consistent with its edge-agent positioning.
- **Cost efficiency: 100/100.** The headline virtue: **free Apache-2.0 weights under 2 GB at 4-bit**, runnable on a phone/laptop — near-zero cost, fully private, no API bill.
- **Overall Score: 52.4/100.** Half-up mean of the five quality dims (48+52+62+52+48)/5 = 52.4. Best fit: **private, offline, on-device assist** — phone-class chat/extraction, simple tool glue, and basic image understanding with a surprisingly large 262K window — where a 2B free model "punching at 7-9B" is enough. The score leans on a **solid independent AA anchor (16)** (rare for these scaffolded small entries), but is capped by the small reasoner/coder headroom, AA-noted **overthinking (~390M tokens)** and **hallucination** weaknesses, and the fact it's local-only (no hosted API at eval time). Multimodal is **above the floor** because native vision is confirmed.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Artificial Analysis "Qwen3.5 small models" (2026-03-05)**: **Intelligence Index 16 (Reasoning)** for the 2B, family-wide **Apache 2.0 / 262K context / native vision / unified thinking**, the **~390M-token** Intelligence-Index cost and **AA-Omniscience hallucination** caveats, and MMMU-Pro family figures; **HF `Qwen/Qwen3.5-2B`** checkpoint (post-trained, 2026-03-09); qwen.ai Qwen3.5 release and small-model coverage (0.8B/2B phone-class, <2 GB at 4-bit). The curated `meta.json` is **scaffolded** (generic 128K/text/"Standard pricing") and is **overridden** by AA/Alibaba evidence (262K, native vision, free local). Scores are normalized 1–100 interpretations, **anchored to the independent AA Intelligence Index (16)** rather than vendor self-report — the strongest grounding among these small scaffolded entries — while still discounting for the model's absolute small-size headroom, overthinking, and factuality weakness. **Multimodal scored above the text-only floor** because native vision is confirmed. Kept distinct from sibling folders `qwen-3.5-0.8b` (AA 9), `qwen-3.5-4b` and `qwen-3.5-9b`.
- Revisit trigger: publication of an individual **MMMU-Pro / SWE-bench / GPQA** row for the 2B specifically, a hosted-API listing (adding real pricing), or an AA index re-score under a new Intelligence Index version.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
