# Qwen3.8 Max — findings by Grok 4.6

- Source: Alibaba Qwen (`qwen3.8-max`; OpenCode Zen likely `opencode/qwen3.8-max`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba Cloud Model Studio flagship 2.4T MoE (95B active) for long-horizon coding, cowork, and native vision over documents/video. Snapshot alias `qwen3.8-max-2026-09-02`. Not a Free SKU.
- **Provider / access:** Model Studio OpenAI-compatible `qwen3.8-max` (`dashscope-intl.aliyuncs.com/compatible-mode/v1`, Chat Completions). Qwen blog + Alibaba docs.
- **Release / knowledge:** Qwen3.8 blog generation (Aug 2026 tables on The Model Gap 2026-08-17). Knowledge cutoff unpublished.
- **IDs:** `qwen3.8-max` / `qwen3.8-max-2026-09-02`. No Zen Free ID found.
- **Context window:** 1,000,000; OpenCode-style snippet lists maxTokens **65,536** (Qwen blog JSON). Alibaba “1M context”.
- **Modalities:** Native visual understanding of images, documents, long video (blog). Plugin JSON lists input `text, image` (video via Qwen-MM-Plugins / native pipeline — blog claims video; API snippet is text+image). Text out.
- **Pricing (as of 2026-09-19):** Beijing/most regions **$1.65 / $4.951** (+ cache $0.206); Singapore often **$2 / $6** (+ $0.25 cache) (The Model Gap / Alibaba docs). Paid.
- **Architecture:** 2.4T MoE, 95B active (Labellerr / blog). Weights policy: proprietary API flagship (not assumed open).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen blog; The Model Gap flags as self-reported).
- Tau3-Banking: **no verified public score found** (AA Muse 1.3 article mentioned Qwen3.8 Max **51%** Tau3 — cite as AA, not Qwen card).
- Toolathlon-Verified: self-reported on HF card per The Model Gap — **no independent number extracted here**.
- GDPval-AA: **no verified public Elo found** on the Qwen blog table fetch.
- OSWorld-Verified: **86.1%** (Labellerr comparison).
- Claw-Eval: blog footnotes ClawEval-MM (vision) — text Claw-Eval **no verified public score found**.
- MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen blog) / **93.7%** Vals (The Model Gap).
- HLE: **43.6%** no tools (blog) / AA **43.0%**; w/ tools **56.2%** (blog / HF).
- MRCR v2 256K 8-needle: **92.9%** (blog). 512K–1M: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **no verified public index points found** on these pages.
- Omniscience: **no verified public score found**.

Coding:

- SWE-bench Verified: independent per The Model Gap — exact % **not in the snippet** → **no verified public score found** in fetched text.
- LiveCodeBench: independent per The Model Gap — exact % **not in the snippet** → **no verified public score found**.
- SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE 1.1: **56.6%** (Qwen blog) / **57.0%** Datacurve (The Model Gap).
- SWE-bench Pro: **67.7%** (blog).

Long context:

- 1M window; MRCR **92.9%** at 256K only — **not** ≥98% at 512K+.

### Normalized scores (1–100)

- **Tool use: 88/100.** Vendor TB 86.6% near 88%+; OSWorld-Verified 86.1% and AA Tau3 51% (if used) support high 80s. Caps: TB self-report flag, missing GDPval Elo/Claw-Eval on the card.
- **Reasoning: 90/100.** GPQA 92.6–93.7% and HLE ~43% meet the floors. Caps: no Index 60+, no CritPt.
- **Context window: 95/100.** 1M tier; 512K+ MRCR unpublished (256K 92.9% ≠ 100).
- **Multimodal: 82/100.** Blog: images + documents + long video → 75–90. API snippet is text+image; video is claimed natively but not in the OpenCode JSON inputs — cap below 90.
- **Coding: 82/100.** DeepSWE ~57% below 74%+; SWE-Pro 67.7% and TB 86.6% support low 80s. Missing public SWE-Verified/LiveCode/SciCode in fetched text.
- **Cost efficiency: 85/100.** **$1.65 / $4.95** ≈ methodology $1.25/$4.25 ~88; Singapore $2/$6 a bit worse.
- **Overall Score: 87/100.** Mean of (88 + 90 + 95 + 82 + 82) / 5 = 87.4 → **87**. Best-fit: paid Qwen flagship for 1M vision/coding agents; DeepSWE still trails Sol-class.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (qwen.ai blog, Alibaba Model Studio docs, The Model Gap, Labellerr); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
