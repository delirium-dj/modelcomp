# Qwen 3.8 Max — findings by Cat Jam

- Source: Alibaba / Qwen 3.8 Max (`opencode/qwen-3.8-max`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's 2.4T total / 95B active sparse-MoE flagship (GA 2026-08-03). Strong agentic/coding at low cost? Qwen's benchmark work emphasizes long-horizon coding (days-long runs), professional document/formal reasoning, and native visual capabilities; self-reported benchmarks only, independent verification mixed.
- **Provider / access:** QwenCloud API (`qwen3.8-max`), Qwen Studio, QwenWork, Alibaba Cloud Model Studio. API OpenAI-compatible. Text/image/video/documents in; text out.
- **Release / knowledge:** GA 2026-08-03 (preview 2026-07-19); knowledge cutoff not published clearly (likely 2026).
- **IDs:** `qwen3.8-max` (Alibaba), OpenRouter `qwen/qwen3.8-max` (now live on providers)
- **Context window:** 991,808 input / 131,072 output / 1,000,000 total; 262,144 thinking limit. Verified via Alibaba doc.
- **Modalities:** Text, image, video, documents in (per Alibaba "native visual understanding runs through planning/execution/verification"); text out. Tool/function calling, structured outputs, context cache. No video output.
- **Pricing (as of 2026-10-16):** $2.00 / $6.00 per 1M input/output (implicit cache $0.25, explicit cache write $2.50, read $0.17). Batch chat/input discount etc. Token Plan free tier/promo quota.
- **Architecture:** 2.4T total MoE, 95B active; built on Qwen 3.5 architecture. Open-weight Qwen3.8-27B (separate) public; Max weights still not independently verified in sampled sources.

### Raw benchmarks found

Agent / tool use (vendor Qwen launch table + Vals AI):

- Terminal-Bench 2.1: **86.6%** (vendor); Vals independent 67.4%; Vals Mini-SWE harness 34.3 TB4
- Toolathlon Verified: 72.5% (vendor)
- Automation-Bench: **27.3%** (vendor) (automation 29.1? but launch table 27.3)
- WideSearch: 81.9% (vendor)
- Agents' Last Exam (pass / score): 27.0 / 52.4
- JobBench: 53.4 (vendor)
- HLE w/ tools: 56.2
- QwenSWEBench (internal): 80.7 (vendor)
- CoWorkBench 74.8, SkillsBench 70.2, AndroidBench 75.1
- SWE-bench Pro: 67.7 (vendor), with Claude Code harness for Qwen and others from prior published
- SWE-bench Verified independent estimate ~83.6 (Mercor, xhigh config)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor launch table) — essentially level with Opus 4.8/Fable 5.
- HLE: **43.6%** (vendor); behind Fable 5 53.3 / Opus 5.5 56.9.
- IFBench: **82.8%** (vendor; leads table 82.8)
- MRCR v2 256K (8-needle): 92.9
- LongBench v2: 66.3
- $OneMillion-Bench score: 52.5
- PRBench-Legal/Finance, QwenReactBench etc internal
- AA Intelligence Index: not published in sampled sources? MiniRouter reports ranks? Vendor AA index likely ~? No independent AA entry as of Aug 3. Don't invent.

Coding:

- Terminal-Bench 2.1 86.6
- SWE-bench Pro 67.7
- DeepSWE 56.6
- FrontierSWE 73.5
- PaperBench 93.0 (leads table)
- AndroidBench 75.1
- Vibe Code Benchmark? not listed in table? (no)
- MLS-Bench-Lite 41.0
- MLE-Bench? not in sampled table for 3.8
- LiveCode? see no exact sampled livecode value aside from Vals? no
- SWE Verified independent (Mercor, xHigh) 83.6
- SWE Multilingual 88.3 (benchgap? Maybe for qwen? not needed)

Long context:

- MRCR v2 256K 8-needle: 92.9 (vendor)
- LongBench v2: 66.3
- Context 991K in / 131K out.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 86.6, Toolathlon 72.5, OSWorld not in table? WideSearch 81.9, JobBench 53.4, HLE w/ tools 56.2; Vals independent TB2.1 67.4 tempers vendor 86.6; robust agentic vendor claim.
- **Reasoning: 88/100.** GPQA 92.6, HLE 43.6, IFBench 82.8, Agents' Last Exam 52.4, MRCR 92.9; AA Intelligence not published ⇒ cap.
- **Context window: 93/100.** 991.8K/131K with MRCR 92.9 at 256K; LongBench 66.3 caps near-1M retrieval.
- **Multimodal: 88/100.** Native text/image/video; HLE w/ tools 56.2; visual tasks strong; no independent multimodal eval listed (Arena) - use strong.
- **Coding: 86/100.** TB2.1 86.6, SWE-Pro 67.7, DeepSWE 56.6, FrontierSWE 73.5, PaperBench 93.0 (huge); SWE Verified independent 83.6 close.
- **Cost efficiency: 92/100.** $2/$6 per 1M (implicit cache $0.20/$2.50), free promo quota. Good value, mid-tier price.
- **Overall Score: 88/100.** Mean (86+88+93+88+86)/5 = 88.2. Alibaba's flagship for autonomous long-horizon coding/professional tasks, with real vendor gains but hard-reasoning still behind Fable 5.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Alibaba/Qwen launch blog table, ofox, models.opencode.ai, Benchgen, fei3, techtimes, renovateqr); scores are normalized 1–100 interpretations, not official vendor scores. Many benchmark tables are self-reported by Alibaba (Claude Code harness, varying harnesses); independent verification not available for most rows at time of reporting.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
