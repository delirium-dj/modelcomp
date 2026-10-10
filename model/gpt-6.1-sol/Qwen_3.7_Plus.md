# GPT-6.1 Sol — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-6.1-Sol (`opencode/gpt-6.1-sol`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6.1 upgrade, released September 29, 2026 at DevDay 2026. Replaces GPT-6 Sol as the default mid-tier model. Delivers near-GPT-6 Astra intelligence on agentic coding, computer use, and professional workflows at approximately one-fifth the token cost. DeepSWE 71.9% matches Astra's 74.8% at ~$1.50/task vs. ~$7.70/task. OSWorld 2.0 71.4% is within 2.1 pts of Astra's 73.5% at one-seventh the cost. Cached input pricing slashed to $0.10/1M (95% discount). ARC-AGI-2 94.2% is among the highest in the dataset. GDP.pdf 32.0% outperforms Claude Opus 5.5 (28.8%). BenchLM ranks #3 overall (84.18/100). AA Intelligence Index 51.8 is modest for the tier.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`); ChatGPT Work, Codex (Plus, Pro, Business, Enterprise, Edu tiers). Not available in general ChatGPT Chat.
- **Release / knowledge:** 2026-09-29 release (DevDay 2026); knowledge cutoff not precisely documented.
- **IDs:** `opencode/gpt-6.1-sol` (OpenCode Zen); `gpt-6.1-sol` (OpenAI API).
- **Context window:** 1,050,000 tokens (1.05M) total, 128K output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-10):** $2.00/$10.00 per 1M in/out; cached input $0.10/1M (50% discount, 95% off standard); batch/flex 50% below standard; fast mode 2x standard.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **36.1%** (OpenAI; vs. Opus 5.5 33.9% at medium effort, +2.2 pts)
- Terminal-Bench Science 0.1: **57.0%** (OpenAI; >2x GPT-6 Sol)
- ExploitGym: **35.1%** (OpenAI system card)
- GDPval-AA: **53.8%** normalized / Elo **1575** (AA)
- AA Briefcase Elo: **1564** (AA)
- AA AutomationBench: **64.9%** (AA)
- AA Terminal-Bench 4.0: **56.1%** (AA)
- GDP.pdf: **32.0%** (OpenAI; vs. Astra 32.2%, Opus 5.5 28.8%) / **31.0%** (AA)
- AA AnalystAgent: **50.0%** (AA)

Coding:

- DeepSWE: **71.9%** (OpenAI; vs. Astra 74.8% high, Sonnet 5.5 71.0%, GPT-6 Sol 68.8% max) / **75.2%** at higher reasoning (OpenAI via Vellum)
- AA-SciCode: **54.2%** (AA)
- Bug Hunt Bench: **44.3 fixes** (Bug Hunt Bench)

Multimodal:

- OSWorld 2.0 (offline): **71.4%** (OpenAI; vs. Astra 73.5%, GPT-6 Sol 64.4%) — computer use
- AA-MMMU-Pro: **86.0%** (AA)

Reasoning / knowledge:

- ARC-AGI-1: **96.5%** (ARC Prize — near-ceiling)
- ARC-AGI-2: **94.2%** (ARC Prize — among highest in dataset)
- ARC-AGI-3: **52.7%** (ARC Prize)
- AA-LCR (Long Context Reasoning): **83.0%** (AA)
- MLCR-AA: **33.9%** (AA)
- CritPt (Physics): **31.7%** (AA)
- AA Intelligence Index: **51.8** (AA — modest; vs. Astra higher)
- AA-HLE: **52.9%** (AA)
- AA-Omniscience Index: **41.5%** (AA)
- AA-Omniscience Accuracy: **62.1%** (AA)
- AA-Omniscience Hallucination Rate: **54.3%** (AA)
- HealthBench Professional: **64.2%** length-adjusted (OpenAI system card)
- HealthBench Hard: **36.2%** (OpenAI system card)

### Normalized scores (1–100)

- **Tool use: 81/100.** AA AutomationBench 64.9% is solid. AA Terminal-Bench 4.0 56.1% is competitive. GDPval-AA Elo 1575 is respectable. AA Briefcase Elo 1564 is solid. GDP.pdf 32.0% nearly matches Astra (32.2%) and outperforms Opus 5.5 (28.8%). Terminal-Bench Science 57.0% demonstrates scientific workflow capability. AutomationBench 36.1% is moderate (but at only $0.30/task — 4x cheaper than Sonnet 5.5 at 44.7%/$1.14). ExploitGym 35.1% is modest for security-focused tasks. The tool use profile is strong across agentic benchmarks with exceptional cost efficiency.
- **Reasoning: 70/100.** ARC-AGI-1 96.5% is near-ceiling. ARC-AGI-2 94.2% is among the highest in the dataset (only GPT-5.6 Sol at 92.5% is comparable). ARC-AGI-3 52.7% is moderate. AA-LCR 83.0% is good for long-context reasoning. However, AA Intelligence Index 51.8 is modest. AA-HLE 52.9% is moderate. MLCR 33.9% and CritPt 31.7% are weak. AA-Omniscience 41.5% is moderate. The reasoning profile is exceptional on abstract pattern recognition (ARC-AGI) but modest on composite intelligence measures.
- **Context window: 85/100.** 1.05M tokens total with 128K output — same as GPT-6 Astra and GPT-6 Sol. AA-LCR 83.0% is solid for long-context reasoning. Cached input at $0.10/1M makes maintaining persistent, dense context across requests essentially free (per-step input overhead for 200K repo: $0.02 vs. $0.40 uncached). The combination of large context window and ultra-cheap caching is a significant operational advantage for agentic workflows.
- **Multimodal: 79/100.** OSWorld 2.0 71.4% is excellent for computer use (within 2.1 pts of Astra at one-seventh the cost). AA-MMMU-Pro 86.0% is strong for multimodal understanding. Image input supported. The multimodal capability is focused on practical computer use (desktop automation, GUI workflows) rather than broad vision tasks.
- **Coding: 81/100.** DeepSWE 71.9% (OpenAI) / 75.2% at higher reasoning (Vellum) is exceptional — matches or exceeds Astra (74.8%) and outperforms Sonnet 5.5 (71.0%) at a fraction of the cost. Terminal-Bench Science 57.0% demonstrates scientific coding capability. AA-SciCode 54.2% is modest. Bug Hunt Bench 44.3 fixes is solid. The coding profile is anchored by the DeepSWE result, which establishes GPT-6.1 Sol as a near-frontier coding model at mid-tier pricing.
- **Cost efficiency: 95/100.** $2/$10 per 1M with cached input at $0.10/1M (95% discount). DeepSWE tasks at ~$1.50 vs. ~$7.70 for Astra (80% savings). OSWorld tasks at ~$1.30 vs. ~$9.30 for Astra (85% savings). GDP.pdf tasks at ~$0.38 vs. ~$1.95 for Astra (80% savings). AutomationBench at $0.30/task vs. $0.92 for Opus 5.5 (67% savings). Near-Astra intelligence at one-fifth the cost is an exceptional value proposition. The $0.10 cached input pricing makes high-frequency agentic loops economically viable at scale.
- **Overall Score: 79.2/100.** Mean of five quality dims: (81 + 70 + 85 + 79 + 81) / 5 = 79.2. OpenAI's mid-tier GPT-6.1 upgrade. Key strengths: DeepSWE 71.9–75.2% (matches Astra), OSWorld 71.4% (near-Astra computer use), ARC-AGI-2 94.2% (among highest), GDP.pdf 32.0% (outperforms Opus 5.5), $0.10 cached input (95% discount), 1.05M context window, near-Astra intelligence at one-fifth the cost. Key weaknesses: AA Intelligence Index 51.8 (modest), AA-HLE 52.9% (moderate), MLCR 33.9% and CritPt 31.7% (weak), not available in general ChatGPT Chat. Best fit for: cost-sensitive agentic coding workflows (near-Astra DeepSWE at 20% cost), high-frequency computer use (OSWorld at one-seventh Astra cost), enterprise document processing (GDP.pdf), and production agentic loops where cached input at $0.10/1M is critical. Not ideal for: tasks requiring the highest composite intelligence (AA Index 51.8), or users needing general ChatGPT Chat access.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official blog, Vellum, BenchLM, Artificial Analysis, ARC Prize, OpenAI system card addendum, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
