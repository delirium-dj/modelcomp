# Claude Mythos 5 — findings by QoDuck

- Source: Anthropic/Claude Mythos 5 (`claude-mythos-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5 (original June 2026 generation; the unblocked, gated counterpart of Claude Fable 5 — distinct from the later Mythos 5.1 / 5.2)
- **Short description:** Anthropic's most capable model for **cybersecurity and biology research**, released 2026-06-09. Same underlying weights as Fable 5, but the production cyber/bio/chem safeguards are **lifted** for verified partners, so it executes tasks that Fable routes to the Opus 4.8 fallback. Access is gated through Anthropic's verification programs / **Project Glasswing** (defensive cyber + life-sciences research, deployed in collaboration with the US government).
- **Provider / access:** Anthropic Claude API (Messages API) `claude-mythos-5`; Amazon Bedrock `anthropic.claude-mythos-5`; Google Cloud (Google-managed) and Microsoft Foundry `claude-mythos-5`. **Status: Active (verification required)** — restricted to organizations verified through the Cyber Verification Program / Glasswing; not generally available on the public API or Claude.ai.
- **Release / knowledge:** Released 2026-06-09; retirement not sooner than 2027-06-09. Reliable knowledge cutoff and training cutoff **January 2026**. Mythos 5.2 is the current successor.
- **IDs:** `claude-mythos-5` (Anthropic / Google Cloud / Foundry), `anthropic.claude-mythos-5` (Bedrock).
- **Context window:** **1,000,000 tokens** total; **128K** max output via the synchronous Messages API (verified from platform docs).
- **Modalities:** **Text + image in → text out.** Reasoning model (Adaptive thinking always on; default effort **high**). Tool calls supported. No native audio/video/PDF input or non-text output documented.
- **Pricing (as of 2026-11-10):** **$10 / 1M input, $50 / 1M output** (same as Fable 5; thesys.dev notes this is less than half the price of Mythos Preview). 5-minute cache write $12.50, 1-hour write $20, cache read **$1 / 1M**; Batch API 50% off. Glasswing partners receive up to $100M in usage credits (so effective partner cost can be $0, but list price is $10/$50).
- **Architecture:** Proprietary, closed weights. Same base model as Fable 5; Mythos removes the safeguard/fallback layer for verified defensive-research use.

### Raw benchmarks found

> General-benchmark figures are from the Fable 5 & Mythos 5 System Card (Table 8.1.A and the §8 prose), measured for **Mythos 5 unblocked at max effort, averaged over 5 trials, context ≤1M**. Cyber/bio figures are from §3.2 and §8.20 with **all safeguards turned off** — Anthropic explicitly warns these are self-reported, use a static uniform harness, and "may not be directly comparable to public leaderboard entries produced under vendors' deployed conditions." Independent corroboration: UK AISI (government) and Epoch AI.

Agent / tool use:

- Terminal-Bench 2.1 (**agentic**, System Card): **88.0%** — Mythos 5 #1 (Fable 5 84.3% production, Opus 4.8 82.7%, GPT-5.5 83.4% Codex CLI, Gemini 3.1 Pro 70.7% Gemini CLI).
- OSWorld-Verified (**computer use**, §8.16.3, corrected zoom-tool + 128K/turn harness): **85.0%** Mythos 5 (Fable 5 85.0%, Mythos Preview **85.4%** #1, Opus 4.8 83.4%, GPT-5.5 78.7%, Gemini 3.1 Pro 76.2%). pass@1 over 5 runs, 361 tasks / 100 steps.
- GDPval-AA (**agentic Elo**, System Card snapshot 2026-06-06): Mythos 5 column **blank**; **1932** published for Fable 5 (shared weights, production). Mythos Preview 1890, Opus 4.8 1769, GPT-5.5 1314. Independently corroborated by Artificial Analysis (Fable 1932).
- FrontierCode Diamond (**agentic coding**, §8.4): **29.3% — #1** published for Fable 5 (Mythos 5 column blank; shared weights). Opus 4.8 13.4, GPT-5.5 5.7.
- AutomationBench (**agentic**): **17.4** (Fable 5 / shared). Blueprint-Bench 2: **38.6**. OfficeQA Pro: **57.9**. GDP.pdf: **29.8**. Harvey's / Legal Agent Benchmark: **13.3**.
- Tau2/Tau3-Banking, Toolathon, MCP-Atlas, SWE Atlas, Claw-Eval: no verified public score found for this exact ID. Artificial Analysis names the shared Fable 5 model frontrunner on TB-Hard + Tau2-Telecom (no raw Tau number published).

Cyber (unblocked, safeguards OFF — self-reported; see caveats):

- ExploitBench (**offensive cyber ladder**, §3.2.1, 41 post-2024 V8 vulns, 16 capability flags): Mythos 5 **Mean 10.44 flags plain / 10.75 AutoNudge; Cap% 78**; full arbitrary code execution on "more than half" of environments. Mythos Preview 9.90 / Cap% 69, Opus 4.8 5.56 / 40, GPT-5.5 4.44 / 34. (Fable 5's safeguards flagged 407 of 410 episodes after ~27 turns — i.e., Fable blocks nearly all of these.)
- Firefox 147 exploit eval (**Mozilla collaboration**, §3.2.4, 250 trials): Mythos 5 full working exploit **88.4%** (221/250); Mythos Preview 70.8%, Opus 4.8 8.8%.
- CyberGym (**targeted vuln reproduction**, §3.2.3, pass@1 over 1,507 tasks): **83.8%** reproduced; **99.4%** any crash. Preview 83.1% / 97.1%, Opus 4.8 78.1% / 95.7%.
- OSS-Fuzz (**unguided vuln discovery**, §3.2.2, ~830 entry points / 228 projects): top score 1.0 on **13 targets**; any crash **80.0%**; write-primitive-or-better (≥0.4) **32.4%**. Preview 76.7% / 31.1%, Opus 4.8 61.5% / 18.2%.
- CyScenarioBench (**multi-stage cyber ops**, Epoch AI-reported): Mythos 5 **36.7%**, Preview 29.2%, Opus 4.8 16.6%, GPT-5.5 26%, GPT-5.4 9%.
- UK AISI (**independent government testing**, §3.2.5): expert-level cyber tasks comparable to Mythos Preview and **ahead of GPT-5.5** (strongest fully public model tested); solved "The Last Ones" enterprise-network range end-to-end **6/10**; reached step 21/23 on hardened "Doing Life" more consistently than any model (none solved it); did **not** solve "Cooling Tower" ICS range (only Preview succeeded, 3/10). AISI judges Mythos 5 capable of attacking small, weakly-secured enterprise networks post-access — more proficient than any publicly available model tested.

Biology / life sciences (unblocked — self-reported, §8.20):

- BioMysteryBench: Human-Solvable **83.9%** (#1), Human-Difficult **46.1%** (#1). Preview 82.6 / 29.6, Opus 4.8 80.4 / 40.0, Sonnet 4.6 78.4 / 30.9.
- LatchBio SpatialBench Verified **69.2%** (#1); SingleCellBench **59.3%** (#1). Structural biology (open-ended) **87.2%** (#1). ProteinGym Hard **44.8%** (#1). Organic chemistry **90.1%** (#1). Protocol troubleshooting **66.7%** (Preview leads 69.6%).
- LABBench2: clinical-trial **91.2%**, literature 86.5%, table reading 82.4%, patents 79.8%, database 74.2%, FigQA 48.3% (hardest category).
- HealthBench **62.7** / Professional **66.0** (System Card).

Reasoning / knowledge:

- HLE (**Humanity's Last Exam**, System Card): **59.0% no-tools / 64.5% with-tools** — Mythos 5 (Fable column blank → fallback). Mythos Preview 56.8 / **64.7** (slightly higher w-tools), Opus 4.8 49.8 / 57.9, GPT-5.5 41.4 / 52.2, Gemini 3.1 Pro 44.4 / 51.4.
- GPQA Diamond (**reasoning**, §8.8): **94.1%** (avg 5 trials). Anthropic deems GPQA saturated and plans to stop reporting it.
- Artificial Analysis Intelligence Index (**independent**, launch 2026-06-09): shared Fable 5 model **64.9 — #1 overall** at launch (pre-v5 methodology; ~5 pts ahead of GPT-5.5). Mythos 5 itself is gated and not separately ranked by AA; unblocked it would exceed Fable's production score on HLE/cyber/bio.
- AA-Omniscience Accuracy (**independent**): **40** (shared Fable measurement; higher accuracy / lower hallucination).
- USAMO 2026 (**proof math**, §8.10): **99.8%** (medium/high/xhigh), 98.3% low; Opus 4.8 96.7%, Opus 4.7 69.3%. No contamination.
- RiemannBench (**research math**, §8.9): **55.0%** (max effort, no tools); Preview 43.0%, Opus 4.8 34.0%. CritPt (**physics**): **28.6%**. ArxivMath: **78.5%**.
- LCR/MLCR: no verified public score found.

Coding:

- SWE-bench Verified (**coding**, System Card): **95.5%** — Mythos 5 #1 (Fable 5 95.0%, Preview 93.9%, Opus 4.8 88.6%, Gemini 3.1 Pro 80.6%).
- SWE-bench Pro (**coding**, System Card): **80.3%** — Mythos 5 #1 (Fable 5 80.0%, Preview 77.8%, Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 54.2%).
- Terminal-Bench 2.1: **88.0%** (#1, see Agent/tool use). FrontierCode Diamond: **29.3% #1** (shared/Fable, see above).
- LiveCodeBench, SciCode/AA-SciCode, Vibe Code Bench, DeepSWE: no verified public score found for this exact ID.

Long context:

- GraphWalks BFS 256K (**retrieval**, System Card): **91.1%** Mythos 5 (Fable blank). GraphWalks Parents 256K: **99.96%**. Native window **1M**. No ≥98% retrieval figure at 512K+ published → 100/100 ceiling not met. MRCR/RULER: no verified public score found.

Multimodal:

- CharXiv (**chart reasoning**, System Card): **88.9% no-tools / 93.5% with-tools** — Mythos 5 (Fable blank). OSWorld-Verified **85.0%** (multimodal computer use). Native input text + image only; no native audio/video/PDF or non-text output.

### Conflicting-results notes

- **OSWorld resolved:** an early/messy table extraction suggested ~68.7–71.8%; the authoritative §8.16.3 prose states **Mythos 5 = 85.0%** (corrected zoom-tool bug + 128K/turn). thesys.dev corroborates 85.0 (Preview 85.4 #1, Opus 4.8 83.4, GPT-5.5 78.7, Gemini 76.2). I use 85.0%.
- **GDPval-AA / FrontierCode:** the System Card publishes these for **Fable 5** (1932 / 29.3) and leaves the **Mythos 5** column blank. They are shared-weight production figures, not Mythos-specific measurements; I attribute them as such rather than claiming a Mythos 5 number.
- **Mythos 5 loses two head-to-heads (thesys.dev):** Mythos Preview beats it on OSWorld-Verified (85.4 vs 85.0) and HLE-with-tools (64.7 vs 64.5). The "strongest cyber model" claim is not a clean sweep over its own preview.
- **Self-reported cyber/bio + contamination risk:** all §3.2/§8.20 numbers are Anthropic-reported with safeguards off, on a static uniform harness; Anthropic itself warns they may not compare to deployed-condition leaderboards. Epoch AI notes Cybench/CyberGym are near-saturated (CyberGym capped ~95%, models crash code 95%+ without targeting the right bug), so the 83.8%/99.4% figures overstate practical discovery skill.
- **Epoch AI (independent) verdict:** exploit *development* is a real jump (Mythos Preview ~7 months ahead of trend on Cyber-ECI; Mythos 5 "modestly above" Preview), but vulnerability *discovery* gains are confounded by up to $100M in Glasswing credits (High/Critical CVEs +142% April / +262% May vs 2025 baseline). curl case: 1 low-severity bug + 4 false positives; partner testimony (Mozilla, Palo Alto, Cloudflare, AWS) is non-neutral (free credits). Most evidence concerns Preview; Mythos 5 conclusions are extrapolated.
- **Fallback-rate conflict:** thesys/Vellum claim ">95% of Fable 5 sessions involve no fallback" (<5% route to Opus 4.8); Artificial Analysis measured fallback on ~8% of Index tasks / ~9% of HLE tasks. The independent rate is higher, so the shared-weight ceiling overstates Fable's production behavior — Mythos 5 (unblocked) is the truer measure of the weights.
- **Andon Labs (independent):** unblocked Mythos 5 on Vending-Bench made *less* money than Opus 4.7 / GPT-5.5 and showed an early alignment regression — headline cyber/bio leads do not imply broad real-world agentic superiority.
- **Generational context:** original Mythos 5 ExploitBench Cap% **78** / CyScenarioBench **36.7%** are far below Mythos 5.2 (Cap% 95–97 / CyScenarioBench 76.3% / 90% full ACE). Scores here describe the June 2026 model, now legacy with Mythos 5.2 as successor.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 94/100.** TB2.1 88.0% (#1, hits the ~88% anchor), OSWorld 85.0%, GDPval-AA 1932 (shared, far above ~1750), FrontierCode Diamond #1, plus exceptional unblocked agentic cyber execution (Firefox 88.4% full exploit, CyberGym 83.8%, UK AISI enterprise range 6/10). Modest AutomationBench 17.4 and the blank Mythos GDPval column cap it below 95.
- **Reasoning: 95/100.** HLE 64.5% w-tools / 59.0% no-tools (unblocked, near top), GPQA 94.1% (saturated), USAMO 99.8%, RiemannBench 55.0%, ArxivMath 78.5%, and AA Index 64.9 #1 (shared Fable, launch vintage) evidence frontier reasoning; Preview's slightly higher HLE w-tools and pre-v5 Index vintage keep it at 95 rather than 96+.
- **Context window: 95/100.** Native 1M tokens (≥1M tier = 95–100); GraphWalks 91.1% BFS / 99.96% Parents at 256K show strong retrieval, but no ≥98% figure at 512K+ is published, so 100 is not awarded.
- **Multimodal: 68/100.** Text + image input → text output only (no native audio/video/PDF, no non-text output); CharXiv 88.9/93.5% and OSWorld 85.0% confirm capable image/chart/computer-use reasoning. Lands in the +image 60–70 band.
- **Coding: 94/100.** SWE-bench Verified 95.5% / Pro 80.3% (both #1, marginally above Fable's 95.0/80.0), TB2.1 88.0%, FrontierCode Diamond #1 (shared 29.3%) evidence frontier coding; no DeepSWE/SciCode figure and the shared-weight FrontierCode attribution cap it below 95.
- **Cost efficiency: 30/100.** $10 in / $50 out per 1M list price maps to the ~$10/$50 ≈ 30 anchor; cache read $1, Batch 50% off, and Glasswing credits soften effective partner cost but do not change the list-price tier.
- **Overall Score: 89.2/100.** Half-up mean of (94 + 95 + 95 + 68 + 94) / 5 = 446 / 5 = 89.2. Best fit: authorized defensive cybersecurity and life-sciences research where unblocked cyber/bio execution and frontier reasoning are required and verification gating + premium price are acceptable; choose Mythos 5.2 for the current, substantially stronger cyber generation, or Fable 5 for general public API use.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official Anthropic platform docs + the Fable 5 & Mythos 5 System Card PDF (extracted via pdftotext; §3.2 cyber, §8.20 bio, §8.16.3 OSWorld, Table 8.1.A), cross-checked against independent UK AISI testing (quoted in the card), Epoch AI's critical cyber analysis, Artificial Analysis, and thesys.dev. Scores are normalized 1–100 interpretations, not official vendor scores. Self-reported safeguards-off cyber/bio numbers are flagged as such and weighted against independent critique.
- Reference URLs:
  - [Anthropic — Claude Mythos 5 model overview (platform docs)](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Anthropic — Claude Fable 5 & Mythos 5 System Card (PDF)](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [Anthropic — Project Glasswing](https://www.anthropic.com/glasswing)
  - [Epoch AI — Are Mythos' cyber capabilities overhyped?](https://epochai.substack.com/p/are-mythos-cyber-capabilities-overhyped)
  - [thesys.dev — Claude Mythos 5: Benchmarks, Project Glasswing & access](https://www.thesys.dev/blogs/claude-mythos)
  - [Artificial Analysis — Claude Fable 5 / Mythos 5 Intelligence Index](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.