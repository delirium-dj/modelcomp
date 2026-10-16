# Muse Spark 1.2 — findings by Cat Jam

- Source: Meta / Muse Spark 1.2 (`opencode/muse-spark-1.2`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Previous Muse Spark generation (released 2026-08), predecessor to 1.3. Same 1M context and paid standard pricing; full audio support (1.3's audio is degraded). Slightly lower agentic/coding scores than 1.3.
- **Provider / access:** Meta Model API (`muse-spark-1.2`, `muse-spark-1.2-contributor`), Muse Code. Chat Completions/Responses/Messages.
- **Release / knowledge:** Released 2026-08-05 (per Wikipedia? not verified); knowledge cutoff not published, estimated mid-2026.
- **IDs:** `muse-spark-1.2` (Meta), OpenRouter `meta/muse-spark-1.2`
- **Context window:** 1,048,576 tokens; max output 943,718 (same as 1.3). Verified via Meta docs/model comparison.
- **Modalities:** Text, image, video, audio, PDF in; text out. Reasoning efforts. Tool calling and structured output.
- **Pricing (as of 2026-10-16):** Standard $1.25/$4.25 per 1M; Contributor $0.10/$0.20; cached $0.15/$0.002. Free promo routes also used. No long-context premium.
- **Architecture:** Proprietary closed-weight (commercial API only).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1615** Elo (Meta benchmark table for 1.2 xhigh)
- JobBench: **61.6%**
- OSWorld 2.0: **47.6%** (partial)
- DeepSearchQA: **85.9%**
- AutomationBench: **38.2%**
- Agentic IF Index (Internal): **46.2%**
- AA-AutomationBench? not independently located
- AA-Briefcase? not independently located
- MCP Atlas/ClawProBench: not separately found for 1.2

Reasoning / knowledge:

- Meta's launch table does not list GPQA/HLE/AI index for 1.2 separately in the sampled benchmark panel; independent numbers in sampled data are sparse. Use 1.2 table: no GPQA/HLE rows found (report "not published in sampled sources").
- MRCR 256K–512K: **66.3%**; 512K–1M: **55.5%** (substantially below 1.3)
- Critics? no CritPt number found in sampled data.

Coding:

- DeepSWE v1.1: **55.0%** (Meta table)
- SWE-Atlas Codebase QnA: **46.2%**
- Terminal-Bench 2.1: **82.9%** (Meta)
- LiveCodeBench/SWE-bench Verified: not published in sampled data for 1.2

Multimodal / long context:

- MRCR 256K-512K 66.3%, 512K-1M 55.5% at 1M window.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1615, JobBench 61.6, OSWorld 47.6, DeepSearchQA 85.9, AutomationBench 38.2. Good but lower agentic tier than 1.3.
- **Reasoning: 85/100.** GPQA/HLE not published for 1.2 in sampled sources (unverified; do not copy 1.3's numbers). MRCR ~55-66% at 1M confirms solid but not 1.3-level; caps from missing independent HLE/GPQA.
- **Context window: 92/100.** 1,048,576 tokens but MRCR 66.3/55.5% (significantly lower than 1.3's 98%) caps.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in; text out. Full audio support in 1.2 (better than 1.3's degraded audio), but other input coverage similar; no audio output.
- **Coding: 85/100.** DeepSWE 55.0, SWE-Atlas 46.2, Terminal-Bench 2.1 82.9. Mid-frontier; missing LiveCodeBench/SWE-bench official.
- **Cost efficiency: 98/100.** Same pricing as 1.3, including a heavily discounted Contributor tier and free promo routes; $1.25/$4.25 standard → generous value.
- **Overall Score: 88/100.** Mean of (88 + 85 + 92 + 88 + 85) / 5 = 87.6. One step below 1.3; choose 1.3 for new work.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Meta Model API benchmark table for 1.2 xhigh vs 1.3, published Meta docs/pricing; external AA/third-party for 1.2 sparse; avoid copying 1.3 numbers where 1.2-specific verification is missing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
