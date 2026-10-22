# Muse Wonder 1.0 — findings by GPT 6.1 Sol

- Source: Meta, `muse-wonder-1.0`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)

## Model card

- **Name / identity:** Muse Wonder, original1.0, distinct from subscription-only **Muse Wonder Full**. API max reasoning is not evidence of Full access.[1]
- **Access / release:** Meta Model API and Muse Code; released **2026-10-12**. Proprietary, undisclosed parameter count and cutoff. Exact first-party ID `muse-wonder-1.0`; no authenticated inference performed.[1][2]
- **Context / modalities:** **1M**, model-card input **text/image/video/audio**, output text. Vals' measured route exposes text/images/files and131,072 output; those serving limits do not erase model-level modalities.[2][4]
- **Pricing:** Current primary **$4 input/$20 output/$0.20 cached per1M**; Full requires Muse Code subscription and has no quoted standalone API rate. No verified exact free tariff.[1]

### Raw benchmarks found

- **Primary scorecard, standard Wonder max column:** DeepSWEv1.1 **78.8%**, SWE-Marathon **53.1%**, ProgramBench **50.0%**, JobBench **70.5%**, MemoryBench **85.6%**. Full's higher column is not transferred.[1][2]
- Original13-page PDF checked: DeepSWE uses **113 tasks/91 repositories/five languages, pass@1**, results attributed to Datacurve. Marathon pass@1 comes from AbundantAI, with different agents across compared vendors; Full's xhigh is not standard Wonder's condition. ProgramBench is the fraction of rollouts passing≥95% of hidden tests, not every test passed.[2]
- **AA independent exact max**, UUID`ff2f3f3d-783f-4e27-8a39-47237501a313`: measured Index **52.3939**, **TB4 52.0202%**, science-terminal **25.7143%**, **GDPval1770.34 Elo**, Briefcase1658.65 Elo/rubric61.2121%, AutomationBench **68.0946% partial**.[3]
- AA **HLE50.0927%**, **CritPt28.2857%**, **SciCode60.3009%**, **LCR80.6667%**, GDP.pdf30.6% all-pass. GPQA/LCB/MMMU-Pro null, not measured zero. Omniscience accuracy41.1%/hallucination26.5139% under its own denominators.[3]
- **Vals independent max**, Meta,temperature1,131,072 output: **TB4 49.49% ±2.20**, **Code Migration72.36% ±3.19**, **Vibev1.1 83.09% ±2.49**, **SWE Multimodal45.63% ±2.28**, FinanceAgentv2.1 65.55%±2.03, **CUA7.17%**. Its64.88% index is a scoped composite, not universal accuracy; task latency is not token latency.[4]
- No verified≥98% full-million-window retention, exact Claw/MCP or universal computer-use reliability found. Long-context capacity and tool-generated media are distinct from perception accuracy.

### Normalized scores (1–100)

- **Tool use: 78/100.** Independent terminal/professional evidence is strong, but CUA and incomplete workflow completion limit breadth.[3][4]
- **Reasoning: 88/100.** Independent HLE50.09%, CritPt28.29% and LCR80.67% support advanced reasoning, with remaining factual/coverage gaps.[3]
- **Context window: 95/100.** Verified1M capacity without perfect-retention claims.[1][2]
- **Multimodal: 86/100.** Primary broad input support and independent visual-engineering results; limited audio/video-specific replication and text-only output cap breadth.[2][4]
- **Coding: 84/100.** Long-horizon primary-attributed and independent terminal/migration/Vibe results support engineering, with harness variation and incomplete CUA.[1][2][4]
- **Cost efficiency: 65/100.** Strong capability but expensive output and long agent trajectories; cache discounts help, no free tariff verified.[1][3]
- **Overall Score: 86/100.** Half-up mean `(78+88+95+86+84)/5=86.2`; cost excluded.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22Muse%20Wonder%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22Muse%20Wonder%22%20model%20benchmark): access/JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22Muse%20Wonder%22%20model%20benchmark): useful exact primary model-card/developer and AA leads. No peer findings used.

[1]: https://dev.meta.ai/models/muse-wonder
[2]: https://research.meta.ai/static/muse-wonder-model-card
[3]: https://artificialanalysis.ai/models/muse-wonder
[4]: https://www.vals.ai/models/meta_muse-wonder

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary PDF/developer and AA/Vals public-web research; normalized interpretations, not vendor scores.
