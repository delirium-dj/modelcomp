# GPT-6 Luna — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-6 Luna (`openai/gpt-6-luna`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 82 provisional→**93 verified** (**$0.10 in / $0.50 out** per 1M, pricepertoken + AA providers; AA: **"GPT-6 Luna (max) costs $0.07 per task, ~60% less than GPT-5.6 Luna … driven by the price cut"**); launch **2026-09-22** confirmed (live, not stale); hallucination **76.7%** consistent with the reported "93%→77%" drop from GPT-5.6 Luna; still **no GPT-6-Luna SWE-bench Verified / GPQA row** so evidence-limited bands hold — quality unchanged, **Overall remains 73**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost Luna volume tier of the GPT-6 family (sibling of Astra/Sol), pitched as near-frontier DeepSWE at a fraction of the cost. BenchLM coverage is **thin** (27 of 618 rows; 64.95/100, #37 of 645, Reasoning type): the clear positives are DeepSWE **66.6%**, ARC-AGI-1 86.7% / ARC-AGI-2 59.3%, AA-LCR 83.3 and a 1.05M window; the reads that hold it back are a sub-bar AA-HLE (38.5%), near-floor ARC-AGI-3 (0.1%), a 76.7% hallucination rate, and missing SWE-bench-Verified/LiveCodeBench/GPQA rows (several dims are evidence-limited).
- **Provider / access:** OpenAI API (`gpt-6-luna`); official model card at developers.openai.com. Reasoning + tool calls; image input; `noFreeId`.
- **Release / knowledge:** 2026 (GPT-6 family, "Introducing GPT-6 Sol and Luna"); cutoff not disclosed.
- **IDs:** `openai/gpt-6-luna`.
- **Context window:** BenchLM lists **1.05M**; curated `meta.json` "1M" — consistent.
- **Modalities:** Text + image in; text out (BenchLM and curated meta agree).
- **Pricing (as of 2026-10-02):** Paid low-cost Luna volume tier (exact per-1M not in curated meta; positioned as the cheap GPT-6 tier).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (27 of 618 rows; 64.95/100, #37 of 645, Reasoning type), citing the OpenAI GPT-6 Sol/Luna announcement, GPT-6 Astra system card, Artificial Analysis, ARC Prize and (for context) siblings. **Coverage is thin (27 rows) and skews toward agentic/reasoning; coding has only two rows and there is no GPQA or SWE-bench-Verified row**, so those dims are scored as evidence-limited.

Agent / tool use:

- AA AutomationBench **53.2%** (respectable); GDPval-AA **1367 / 43.4%** (mid autonomy); AA Briefcase 1299
- weak newest/frontier tiers: ExploitGym 11.6%, AA Terminal-Bench 4.0 12.6%, GDP.pdf 20.4%

Coding (evidence-limited — only two rows):

- DeepSWE **66.6%** (near-frontier long-horizon software); AA-SciCode 54.6%; no SWE-bench Verified / LiveCodeBench row present

Reasoning / knowledge:

- ARC-AGI-1 **86.7%** / ARC-AGI-2 59.3% (strong) but ARC-AGI-3 **0.1%** (near-floor); AA-LCR 83.3; MLCR-AA 16.1; CritPt 19.4%
- AA Intelligence Index 37.3 (moderate); AA-HLE **38.5%** (under 40 bar); HealthBench Professional 60.8% / Hard 31.4%; **no GPQA row**
- AA-Omniscience Index 0.7 / Accuracy 43.8% / **Hallucination 76.7%** (severe)

Multimodal / long context:

- AA-MMMU-Pro 75.5 (image only)
- 1.05M window; AA-LCR 83.3 supportive (no ≥98% MRCR at 512K+ reported)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Thin coverage (27/618) means Coding and Reasoning rest on few rows and are scored conservatively.

- **Tool use: 70/100.** AA AutomationBench 53.2% and mid-band GDPval-AA (1367 / 43.4%) show real-world autonomy, but the hardest new tiers stay weak (ExploitGym 11.6%, AA Terminal-Bench 4.0 12.6%, GDP.pdf 20.4%) — a respectable-but-uneven, evidence-limited agentic profile.
- **Reasoning: 66/100.** ARC-AGI-1 86.7% / ARC-AGI-2 59.3% and AA-LCR 83.3 are strong signals, but ARC-AGI-3 collapses to 0.1%, AA-HLE 38.5% is under the 40 bar, Intelligence Index 37.3 is only moderate, there is no GPQA row, and a 76.7% hallucination rate (Accuracy 43.8%) drags unaided reliability down.
- **Context window: 92/100.** A 1.05M window is the top band, backed by a strong AA-LCR 83.3 for long-context reasoning; no ≥98% MRCR at 512K+ is published, so an upper (not maximum) placement.
- **Multimodal: 66/100.** Text+image in with a single good vision read (AA-MMMU-Pro 75.5) but no audio/video/document rows and text-only output — an upper +image placement tempered by the very thin coverage.
- **Coding: 72/100.** DeepSWE 66.6% is a strong near-frontier long-horizon software signal (the vendor's headline claim) and SciCode 54.6% is middling, but with no SWE-bench Verified/LiveCodeBench rows this is an evidence-limited placement — likely capable, not yet proven at the top of the ~74 bar.
- **Cost efficiency: 93/100.** (Revised by the 2026-11-03 second pass from 82/100: the exact lane is now verified — **"GPT 6 Luna is priced at $0.100 per million input tokens and $0.500 per million output tokens"** (pricepertoken) with AA providers listing OpenAI at **"$0.10 per 1M input"**, and AA confirming **"GPT-6 Luna (max) costs $0.07 per task, ~60% less than GPT-5.6 Luna (max) at $0.18 … driven by the price cut"** (cost-per-task as low as $0.01 on the Low tier). At roughly half the GPT-5.6 Luna sibling's cost (which scored 92) this is among the cheapest capable tiers; trimmed only by noFreeId. Cost is excluded from Overall.) Positioned as OpenAI's low-cost GPT-6 volume tier (paid, no free ID) — cheap relative to Astra/Sol, provisionally near the low/mid band. Cost is excluded from Overall.
- **Overall Score: 73/100.** Mean of Tool 70, Reasoning 66, Context 92, Multimodal 66, Coding 72 = 73.2 → 73. Best fit: a budget GPT-6 for long-horizon software (DeepSWE), long-context work and ARC-style reasoning at low cost with a 1.05M window; treat this score as provisional given thin (27/618) coverage — the known risks are a severe hallucination rate, sub-bar HLE, failed novel-reasoning frontier (ARC-AGI-3) and unproven SWE-bench-Verified-class coding.

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02). The single large open item was Cost (pass-1 had no published rate); quality coverage (27/618) is unchanged and remains evidence-limited.

**Sources:** pricing — https://pricepertoken.com/pricing-page/model/openai-gpt-6-luna (**"GPT 6 Luna is priced at $0.100 per million input tokens and $0.500 per million output tokens … available from 4 providers, with OpenAI"** — 2026-10-21) and https://artificialanalysis.ai/models/gpt-6-luna/providers (**"The providers with the lowest input token pricing for GPT-6 Luna (Max) are OpenAI (Flex) ($0.05 per 1M input tokens), OpenAI ($0.10 per 1M input tokens)"**) and https://artificialanalysis.ai/models/releases/gpt-6-luna (**"GPT-6 Luna (Low) at $0.01 offers the lowest cost per task"**) · cost-efficiency — https://artificialanalysis.ai/articles/gpt-6-sol-and-luna-push-the-cost-efficiency-frontier (2026-09-22: **"GPT-6 Luna (max) costs $0.07 per task, ~60% less than GPT-5.6 Luna (max) at $0.18. This is driven by the price cut"**) · launch — https://alphacorp.ai/blog/gpt-6-sol-and-luna-launch-benchmarks-pricing-and-everything-you-need-to-know (**"OpenAI launched GPT-6 Sol and GPT-6 Luna on September 22, 2026, at half the price of GPT-5.6"**).

**What moved and how it was resolved:**

1. **Cost 82 → 93 (provisional → verified).** The real lane is **$0.10 / $0.50** with cost-per-task down to $0.01–$0.07 — roughly half the GPT-5.6 Luna sibling (which scored 92), driven by the Sept-2026 price cut; only noFreeId keeps it from the top. Excluded from Overall, so the composite is unchanged.
2. **Launch date confirmed live.** GPT-6 Sol/Luna shipped **2026-09-22**, so this is a current model (the "2026 GPT-6 family" note is now dated), not a stale artifact.
3. **Hallucination consistent.** Pass-1's **76.7 %** matches the reported "93 %→77 %" fall from GPT-5.6 Luna — the reliability caveat was already priced into Reasoning 66; no new evidence to move it.
4. **Coding/Reasoning still evidence-limited.** No GPT-6-Luna-specific SWE-bench Verified or GPQA row surfaced (the Superconductor/custom-SWE run covered GPT-5.6, not this id), so Coding 72 (DeepSWE-only) and the GPQA-less Reasoning band stand.

**Scores changed by this pass:** Cost 82→93 (verified); Tool 70, Reasoning 66, Context 92, Multimodal 66, Coding 72 all hold → **Overall remains 73**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-6 Sol/Luna announcement, GPT-6 Astra system card, Artificial Analysis and ARC Prize); **thin coverage (27/618, Reasoning)** — Coding and Reasoning are evidence-limited (no SWE-bench Verified / GPQA rows) and scored conservatively. Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (pricepertoken + Artificial Analysis providers/release pages for the verified $0.10/$0.50 lane and $0.01–$0.07/task; the AA cost-efficiency article for the ~60 % price cut vs GPT-5.6 Luna; alphacorp for the 2026-09-22 launch). Moved Cost provisionally→verified while declining to shift any quality band absent a GPT-6-Luna-specific coding/GPQA re-run — **no quality dimension changed and Overall remains 73** (Cost 82→93 excluded). Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
