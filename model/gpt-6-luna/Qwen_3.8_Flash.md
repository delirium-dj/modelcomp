# GPT-6 Luna — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-6 Luna (`openai/gpt-6-luna`)
- Date: 2026-10-02 (UTC)
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
- **Cost efficiency: 82/100.** Positioned as OpenAI's low-cost GPT-6 volume tier (paid, no free ID) — cheap relative to Astra/Sol, provisionally near the low/mid band. Cost is excluded from Overall.
- **Overall Score: 73/100.** Mean of Tool 70, Reasoning 66, Context 92, Multimodal 66, Coding 72 = 73.2 → 73. Best fit: a budget GPT-6 for long-horizon software (DeepSWE), long-context work and ARC-style reasoning at low cost with a 1.05M window; treat this score as provisional given thin (27/618) coverage — the known risks are a severe hallucination rate, sub-bar HLE, failed novel-reasoning frontier (ARC-AGI-3) and unproven SWE-bench-Verified-class coding.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-6 Sol/Luna announcement, GPT-6 Astra system card, Artificial Analysis and ARC Prize); **thin coverage (27/618, Reasoning)** — Coding and Reasoning are evidence-limited (no SWE-bench Verified / GPQA rows) and scored conservatively. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
